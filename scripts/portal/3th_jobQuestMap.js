/*
     名字：隱藏地圖
     地图：閃亮的水晶通路
     描述：910540000
 */

var map = [100, 100, 100, 200, 200, 200, 300, 300, 400, 400, 400, 500, 500, 500];
var quest = [1431, 1432, 1433, 1435, 1436, 1437, 1439, 1440, 1442, 1443, 1447, 1445, 1446, 1448]

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(910540000 + map[i]).getCharacters().size() < 1) {
                pi.getMap(910540000 + map[i]).resetFully();
                pi.playPortalSE();
                pi.getPlayer().changeMap(pi.getMap(910540000 + map[i]), pi.getMap(910540000 + map[i]).getPortal(1));
                pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(910540000));
                return true;
            }
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "異次元的世界目前擁擠，請稍後再試"));
            return false;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "異次元的世界被未知力量封印著"));
    return false;
}
