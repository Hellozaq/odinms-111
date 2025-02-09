/*
     名字：菇菇王國
     地图：瑪天路3
     描述：106021000
 */

var map = 106021001; //安全室
var num = 10;

function enter(pi) {
    if (!pi.getPlayer().itemQuantity(4032405)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "安全室的門被牢牢鎖住，可能需要一把鑰匙"));
        return false;
    }
    for (var i = 0; i < num; i++)
        if (pi.getMap(map + i).getCharacters().size() < 1) {
            if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2335)).getStatus() == 1)
                Packages.server.quest.MapleQuest.getInstance(2347).forceStart(pi.getPlayer(), 0, 1);
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(map + i), pi.getMap(map + i).getPortal(1));
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "安全室目前擁擠，請稍後再試"));
    return false;
}
