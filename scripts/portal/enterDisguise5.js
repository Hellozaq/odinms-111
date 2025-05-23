/*
     名字：皇后之路
     地图：修煉森林3
     描述：130010200
 */

var quest = [20301, 20302, 20303, 20304, 20305];

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(913002400).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "練武場入口目前擁擠，請稍後再試"));
                return false;
            }
            pi.getMap(913002400).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(913002400), pi.getMap(913002400).getPortal(1)); //練武場入口
            pi.getPlayer().getMap().spawnNpc(1104104, new java.awt.Point(372, 70));
            return true;
        }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(130020000), pi.getMap(130020000).getPortal(10)); //練武場入口
    return true;
}
