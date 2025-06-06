/*
	This file is part of the ZeroFusion MapleStory Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>
    ZeroFusion organized by "RMZero213" <RMZero213@hotmail.com>

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

package handling.world.family;

import client.MapleBuffStat;
import client.MapleCharacter;

import java.util.EnumMap;
import java.util.concurrent.ScheduledFuture;

import server.MapleItemInformationProvider;
import server.MapleStatEffect;
import server.MapleStatEffect.CancelEffectAction;
import server.Timer.BuffTimer;
import tools.packet.MaplePacketCreator.BuffPacket;

public enum MapleFamilyBuff {
    Teleport("直接移动到学院成员身边", "[对象] 我\n[效果]直接可以移动到指定的学院\n成员身边。", 0, 0, 0, 300, 190000),
    Summon("直接召唤学院成员", "[对象] 学院成员1名\n[效果]直接可以召唤指定的学院成\n员到现在的地图。", 1, 0, 0, 500, 190001),
    Drop_12_15("我的爆率 1.2倍(15分钟)", "[对象] 我\n[时间] 15分钟\n[效果] 打怪爆率增加到 #c1.2倍# \n※ 与爆率活动重叠时失效。", 2, 15, 120, 700, 190002),
    EXP_12_15("我的经验值 1.2倍(15分钟)", "[对象] 我\n[时间] 15分钟\n[效果] 打怪经验值增加到 #c1.2倍# \n※ 与经验值活动重叠时失效。", 3, 15, 120, 800, 190003),
    Drop_12_30("我的爆率 1.2倍(30分钟)", "[对象] 我\n[时间] 30分钟\n[效果] 打怪爆率增加到 #c1.2倍# \n※ 与爆率活动重叠时失效。", 2, 30, 120, 1000, 190004),
    EXP_12_30("我的经验值 1.2倍(30分钟)", "[对象] 我\n[时间] 30分钟\n[效果] 打怪经验值增加到 #c1.2倍# \n※ 与经验值活动重叠时失效。", 3, 30, 120, 1200, 190005),
    Drop_15_15("我的爆率 1.5倍(15分钟)", "[对象] 我\n[时间] 15分钟\n[效果] 打怪爆率增加到 #c1.5倍# \n※ 与爆率活动重叠时失效。", 2, 15, 150, 1500, 190009),
    Drop_15_30("我的爆率 1.5倍(30分钟)", "[对象] 我\n[时间] 30分钟\n[效果] 打怪爆率增加到 #c1.5倍# \n※ 与爆率活动重叠时失效。", 2, 30, 150, 2000, 190010),
    Bonding("学院成员的团结(30分钟)", "[启动条件] 校谱最低层学院成员\n6名以上在线时\n[时间] 30分钟\n[效果] 爆率和经验值增加到 #c2倍# \n※与爆率、经验值活动重叠时失效。", 4, 30, 150, 3000, 190006),
    Drop_Party_12("我的组队爆率1.2倍(30分钟)", "[对象] 我所属组队\n[时间] 30分钟\n[效果] 打怪爆率增加到 #c1.2倍# \n※ 与爆率活动重叠时失效。", 2, 30, 120, 4000, 190007),
    EXP_Party("我的组队经验值1.2倍(30分钟)", "[对象] 我所属组队\n[时间] 30分钟\n[效果] 打怪经验值增加到 #c1.2倍# \n※ 与经验值活动重叠时失效。", 3, 30, 120, 5000, 190008),
    Drop_Party_15("我的组队爆率 1.5倍(30分钟)", "[对象] 我所属组队\n[时间] 30分钟\n[效果] 打怪爆率增加到 #c1.5倍# \n※ 与爆率活动重叠时失效。", 2, 30, 150, 7000, 190011);
    // 0=tele, 1=summ, 2=drop, 3=exp, 4=both

    public String name, desc;
    public int rep, type, questID, duration, effect;
    public EnumMap<MapleBuffStat, Integer> effects;

    private MapleFamilyBuff(String name, String desc, int type, int duration, int effect, int rep, int questID) {
        this.name = name;
        this.desc = desc;
        this.rep = rep;
        this.type = type;
        this.questID = questID;
        this.duration = duration;
        this.effect = effect;
        setEffects();
    }

    public int getEffectId() {
        switch (type) {
            case 2: //drop
                return 2022694;
            case 3: //exp
                return 2450018;
        }
        return 2022332; //custom
    }

    public final void setEffects() {
        //custom
        this.effects = new EnumMap<MapleBuffStat, Integer>(MapleBuffStat.class);
        switch (type) {
            case 2: //drop
                effects.put(MapleBuffStat.DROP_RATE, effect);
                effects.put(MapleBuffStat.MESO_RATE, effect);
                break;
            case 3: //exp
                effects.put(MapleBuffStat.EXPRATE, effect);
                break;
            case 4: //both
                effects.put(MapleBuffStat.EXPRATE, effect);
                effects.put(MapleBuffStat.DROP_RATE, effect);
                effects.put(MapleBuffStat.MESO_RATE, effect);
                break;
        }
    }

    public void applyTo(MapleCharacter chr) {
        chr.getClient().sendPacket(BuffPacket.giveBuff(-getEffectId(), duration * 60000, effects, null));
        final MapleStatEffect eff = MapleItemInformationProvider.getInstance().getItemEffect(getEffectId());
        chr.cancelEffect(eff, true, -1, effects);
        final long starttime = System.currentTimeMillis();
        final CancelEffectAction cancelAction = new CancelEffectAction(chr, eff, starttime, effects);
        final ScheduledFuture<?> schedule = BuffTimer.getInstance().schedule(cancelAction, duration * 60000);
        chr.registerEffect(eff, starttime, schedule, effects, false, duration, chr.getId());
    }
}
