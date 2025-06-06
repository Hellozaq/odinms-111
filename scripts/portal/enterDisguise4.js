/*
     名字：皇后之路
     地图：修煉森林2
     描述：130010100
 */

var quest = [20301, 20302, 20303, 20304, 20305];

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(913002300).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "提魯森林目前擁擠，請稍後再試"));
                return false;
            }
            pi.getMap(913002300).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(913002300), pi.getMap(913002300).getPortal(1)); //提魯森林
            pi.getPlayer().getMap().spawnNpc(1104103, new java.awt.Point(-2263, -582));
            return true;
        }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(130010120), pi.getMap(130010120).getPortal(2)); //提魯森林
    return true;
}
