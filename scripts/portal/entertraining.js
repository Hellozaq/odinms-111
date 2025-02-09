/*
     名字：楓之島
     地图：冒險者修練場入口
     描述：1010000
 */

var map = [1010100, 1010200, 1010300, 1010400];
var quest = [1041, 1042, 1043, 1044];

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(map[i]).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "冒險者修練場目前擁擠，請稍後再試"));
                return false;
            }

            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(map[i]), pi.getMap(map[i]).getPortal(4));
            pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(1010000));
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "冒險者修練場只適用於接受麥加課程的冒險者"));
    return false;
}
