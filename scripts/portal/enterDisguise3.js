/*
     名字：皇后之路
     地图：修煉森林2
     描述：130010100
 */

var quest = [20301, 20302, 20303, 20304, 20305];

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(913002200).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "提姆森林目前擁擠，請稍後再試"));
                return false;
            }
            pi.getMap(913002200).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(913002200), pi.getMap(913002200).getPortal(1)); //提姆森林
            pi.getPlayer().getMap().spawnNpc(1104102, new java.awt.Point(500, -522));
            return true;
        }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(130010110), pi.getMap(130010110).getPortal(2)); //提姆森林
    return true;
}
