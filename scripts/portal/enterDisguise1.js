/*
     名字：皇后之路
     地图：修煉森林1
     描述：130010000
 */

var quest = [20301, 20302, 20303, 20304, 20305];

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(913002000).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "提諾森林目前擁擠，請稍後再試"));
                return false;
            }
            pi.getMap(913002000).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(913002000), pi.getMap(913002000).getPortal(1)); //提諾森林
            pi.getPlayer().getMap().spawnNpc(1104100, new java.awt.Point(2830, 78));
            return true;
        }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(130010010), pi.getMap(130010010).getPortal(2)); //提諾森林
    return true;
}
