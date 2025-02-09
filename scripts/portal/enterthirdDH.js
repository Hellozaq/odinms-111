/*
     名字：皇后之路
     地图：練武場入口
     描述：130020000
 */

var quest = [20601, 20602, 20603, 20604, 20605];

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(913010200).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第三練武場目前擁擠，請稍後再試"));
                return false;
            }
            pi.getMap(913010200).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(913010200), pi.getMap(913010200).getPortal(1)); //第三練武場
            pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(130020000));
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第三練武場只適用於更新技能的騎士"));
    return false;
}
