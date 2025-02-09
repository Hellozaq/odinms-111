/*
     名字：隱藏地圖
     地图：大將翁的鐵舖
     描述：914021000
 */

var map = 914021010; //鐵舖外部
var num = 10;

function enter(pi) {
    for (var i = 0; i < num; i++)
        if (pi.getMap(map + i).getCharacters().size() < 1) {
            pi.getMap(map + i).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(map + i), pi.getMap(map + i).getPortal(1));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(914021000));
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "鐵舖外部目前繁忙，請稍後再試"));
    return false;
}
