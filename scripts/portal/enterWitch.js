/*
     名字：神木村
     地图：死龍巢穴
     描述：240040510
 */

var map = [924010200, 924010100, 924010000];
var quest = [20407, 20406, 20404]

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() > 1) {
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(map[i]), pi.getMap(map[i]).getPortal(1));
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "死龍巢穴裡散發出讓人毛骨悚然的氣息"));
    return false;
}
