/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3
as published by the Free Software Foundation. You may not use, modify
or distribute this program under any other version of the
GNU Affero General Public License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package handling.channel.handler;

import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.HashMap;

import client.MapleCharacter;
import client.MapleClient;

import client.Skill;
import client.SkillFactory;
import handling.login.LoginInformationProvider;
import handling.world.World;

import static handling.world.World.Guild.getGuild;

import handling.world.guild.*;

import java.nio.charset.Charset;
import java.util.regex.Pattern;

import server.MapleStatEffect;
import tools.packet.EtcPacket;
import tools.data.LittleEndianAccessor;
import tools.Pair;
import tools.packet.EtcPacket.NPCPacket;
import tools.packet.MaplePacketCreator;
import tools.packet.MaplePacketCreator.GuildPacket;

public class GuildHandler {

    public static final void DenyGuildRequest(final String from, final MapleClient c) {
        final MapleCharacter cfrom = c.getChannelServer().getPlayerStorage().getCharacterByName(from);
        if (cfrom != null && invited.remove(c.getPlayer().getName().toLowerCase()) != null) {
            cfrom.getClient().sendPacket(GuildPacket.denyGuildInvitation(c.getPlayer().getName()));
        }
    }

    private static final boolean isGuildNameAcceptable(final String name) {
        if (name.getBytes(Charset.forName("GBK")).length < 1 || name.getBytes(Charset.forName("GBK")).length > 12) {
            return false;
        }
        if (!Pattern.compile("^(?!_)(?!.*?_$)[a-zA-Z0-9_\\u4e00-\\u9fa5]+$").matcher(name).matches()) {
            return false;
        }
        if (LoginInformationProvider.getInstance().isForbiddenName(name)) {
            return false;
        }
        return true;
    }

    private static final void respawnPlayer(final MapleCharacter mc) {
        if (mc.getMap() == null) {
            return;
        }
        mc.getMap().broadcastMessage(EtcPacket.loadGuildName(mc));
        mc.getMap().broadcastMessage(EtcPacket.loadGuildIcon(mc));
    }

    private static final Map<String, Pair<Integer, Long>> invited = new HashMap<String, Pair<Integer, Long>>();
    private static long nextPruneTime = System.currentTimeMillis() + 5 * 60 * 1000;

    public static final void Guild(final LittleEndianAccessor slea, final MapleClient c) {
        final long currentTime = System.currentTimeMillis();
        if (currentTime >= nextPruneTime) {
            Iterator<Entry<String, Pair<Integer, Long>>> itr = invited.entrySet().iterator();
            Entry<String, Pair<Integer, Long>> inv;
            while (itr.hasNext()) {
                inv = itr.next();
                if (currentTime >= inv.getValue().right) {
                    itr.remove();
                }
            }
            nextPruneTime += 5 * 60 * 1000;
        }

        switch (slea.readByte()) { //AFTERSHOCK: most are +1
            case 0x02: // Create guild
                if (c.getPlayer().getGuildId() > 0 || c.getPlayer().getMapId() != 200000301) {
                    c.getPlayer().dropMessage(1, "無法建立公會\r\n已經有公會或不在英雄之殿。");
                    return;
                } else if (c.getPlayer().getMeso() < 500000) {
                    c.getPlayer().dropMessage(1, "你沒有足夠的楓幣建立公會。");
                    return;
                }
                final String guildName = slea.readMapleAsciiString();

                if (!isGuildNameAcceptable(guildName)) {
                    c.getPlayer().dropMessage(1, "'" + guildName + "' 這個公會名稱是不被准許的。");
                    return;
                }
                int guildId = World.Guild.createGuild(c.getPlayer().getId(), guildName);
                if (guildId == 0) {
                    c.getPlayer().dropMessage(1, "請稍後再試。");
                    return;
                }
                c.getPlayer().gainMeso(-500000, true, true);
                c.getPlayer().setGuildId(guildId);
                c.getPlayer().setGuildRank((byte) 1);
                c.getPlayer().saveGuildStatus();
                c.getPlayer().finishAchievement(35);
                World.Guild.setGuildMemberOnline(c.getPlayer().getMGC(), true, c.getChannel());
                //c.sendPacket(GuildPacket.showGuildInfo(c.getPlayer()));
                c.sendPacket(GuildPacket.newGuildInfo(c.getPlayer()));
                World.Guild.gainGP(c.getPlayer().getGuildId(), 500, c.getPlayer().getId());
                //c.sendPacket(NPCPacket.getNPCTalk(2010007, (byte) 0, "祝賀你~ " + guildName + "在我們公會事務所新登記了。\r\n希望以後能互相幫助，有更多的成長~", "00 00", (byte) 0));
                //c.getPlayer().dropMessage(1, "You have successfully created a Guild.");
                //respawnPlayer(c.getPlayer());
                break;
            case 0x05: // invitation
                if (c.getPlayer().getGuildId() <= 0 || c.getPlayer().getGuildRank() > 2) { // 1 == guild master, 2 == jr
                    return;
                }
                String name = slea.readMapleAsciiString().toLowerCase();
                if (invited.containsKey(name)) {
                    c.getPlayer().dropMessage(5, name + "您已接受邀請，請稍後再試。");
                    return;
                }
                final MapleGuildResponse mgr = MapleGuild.sendInvite(c, name);

                if (mgr != null) {
                    c.sendPacket(mgr.getPacket());
                } else {
                    invited.put(name, new Pair<Integer, Long>(c.getPlayer().getGuildId(), currentTime + (20 * 60000))); //20 mins expire
                }
                break;
            case 0x06: // accepted guild invitation
                if (c.getPlayer().getGuildId() > 0) {
                    return;
                }
                guildId = slea.readInt();
                int cid = slea.readInt();

                if (cid != c.getPlayer().getId()) {
                    return;
                }
                name = c.getPlayer().getName().toLowerCase();
                Pair<Integer, Long> gid = invited.remove(name);
                if (gid != null && guildId == gid.left) {
                    c.getPlayer().setGuildId(guildId);
                    c.getPlayer().setGuildRank((byte) 5);
                    int s = World.Guild.addGuildMember(c.getPlayer().getMGC());
                    if (s == 0) {
                        c.getPlayer().dropMessage(1, "此公會已達到最大人數限制。");
                        c.getPlayer().setGuildId(0);
                        return;
                    }
                    c.sendPacket(GuildPacket.showGuildInfo(c.getPlayer()));
                    final MapleGuild gs = World.Guild.getGuild(guildId);
                    for (byte[] pack : World.Alliance.getAllianceInfo(gs.getAllianceId(), true)) {
                        if (pack != null) {
                            c.sendPacket(pack);
                        }
                    }
                    c.getPlayer().saveGuildStatus();
                    respawnPlayer(c.getPlayer());
                }
                break;
            case 0x07: // leaving
                cid = slea.readInt();
                name = slea.readMapleAsciiString();

                if (cid != c.getPlayer().getId() || !name.equals(c.getPlayer().getName()) || c.getPlayer().getGuildId() <= 0) {
                    return;
                }
                World.Guild.leaveGuild(c.getPlayer().getMGC());
                c.sendPacket(GuildPacket.showGuildInfo(null));
                break;
            case 0x08: // Expel
                cid = slea.readInt();
                name = slea.readMapleAsciiString();

                if (c.getPlayer().getGuildRank() > 2 || c.getPlayer().getGuildId() <= 0) {
                    return;
                }
                World.Guild.expelMember(c.getPlayer().getMGC(), name, cid);
                break;
            case 0x0e: // Guild rank titles change
                if (c.getPlayer().getGuildId() <= 0 || c.getPlayer().getGuildRank() != 1) {
                    return;
                }
                String ranks[] = new String[5];
                for (int i = 0; i < 5; i++) {
                    ranks[i] = slea.readMapleAsciiString();
                }

                World.Guild.changeRankTitle(c.getPlayer().getGuildId(), ranks);
                break;
            case 0x0f: // Rank change
                cid = slea.readInt();
                byte newRank = slea.readByte();

                if ((newRank <= 1 || newRank > 5) || c.getPlayer().getGuildRank() > 2 || (newRank <= 2 && c.getPlayer().getGuildRank() != 1) || c.getPlayer().getGuildId() <= 0) {
                    return;
                }

                World.Guild.changeRank(c.getPlayer().getGuildId(), cid, newRank);
                break;
            case 0x10: // guild emblem change
                if (c.getPlayer().getGuildId() <= 0 || c.getPlayer().getGuildRank() != 1 || c.getPlayer().getMapId() != 200000301) {
                    return;
                }

                if (c.getPlayer().getMeso() < 1500000) {
                    c.getPlayer().dropMessage(1, "很抱歉，支付公會徽章所需的楓幣不足。");
                    return;
                }
                final short bg = slea.readShort();
                final byte bgcolor = slea.readByte();
                final short logo = slea.readShort();
                final byte logocolor = slea.readByte();

                World.Guild.setGuildEmblem(c.getPlayer().getGuildId(), bg, bgcolor, logo, logocolor);

                c.getPlayer().gainMeso(-1500000, true, true);
                respawnPlayer(c.getPlayer());
                break;
            case 0x11: // guild notice change
                final String notice = slea.readMapleAsciiString();
                if (notice.length() > 100 || c.getPlayer().getGuildId() <= 0 || c.getPlayer().getGuildRank() > 2) {
                    return;
                }
                World.Guild.setGuildNotice(c.getPlayer().getGuildId(), notice);
                break;
            case 0x1d: //guild skill purchase
                Skill skilli = SkillFactory.getSkill(slea.readInt());
                if (c.getPlayer().getGuildId() <= 0 || skilli == null || skilli.getId() < 91000000) {
                    return;
                }
                int eff = World.Guild.getSkillLevel(c.getPlayer().getGuildId(), skilli.getId()) + 1;
                if (eff > skilli.getMaxLevel()) {
                    return;
                }
                final MapleStatEffect skillid = skilli.getEffect(eff);
                if (skillid.getReqGuildLevel() <= 0 || c.getPlayer().getMeso() < skillid.getPrice()) {
                    return;
                }
                if (World.Guild.purchaseSkill(c.getPlayer().getGuildId(), skillid.getSourceId(), c.getPlayer().getName(), c.getPlayer().getId())) {
                    c.getPlayer().gainMeso(-skillid.getPrice(), true);
                    MapleGuild g = getGuild(c.getPlayer().getGuildId());
                    g.writeToDB(false);
                }
                break;
            case 0x1e: //guild skill activation
                skilli = SkillFactory.getSkill(slea.readInt());
                if (c.getPlayer().getGuildId() <= 0 || skilli == null) {
                    return;
                }
                eff = World.Guild.getSkillLevel(c.getPlayer().getGuildId(), skilli.getId());
                if (eff <= 0) {
                    return;
                }
                final MapleStatEffect skillii = skilli.getEffect(eff);
                if (skillii.getReqGuildLevel() < 0 || c.getPlayer().getMeso() < skillii.getExtendPrice()) {
                    return;
                }
                if (World.Guild.activateSkill(c.getPlayer().getGuildId(), skillii.getSourceId(), c.getPlayer().getName())) {
                    c.getPlayer().gainMeso(-skillii.getExtendPrice(), true);
                }
                break;
            case 0x1f: //guild leader change
                cid = slea.readInt();
                if (c.getPlayer().getGuildId() <= 0 || c.getPlayer().getGuildRank() > 1) {
                    return;
                }
                World.Guild.setGuildLeader(c.getPlayer().getGuildId(), cid);
                break;
        }
    }
}
