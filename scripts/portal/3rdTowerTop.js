/*
     名字：獅子王城
     地图：第三座塔
     描述：211060600
 */

function enter(pi) {
    if (pi.getPlayer().itemQuantity(4032834)) {
        if (pi.getMap(211060601).getCharacters().size() < 1) {
            var em = pi.getEventManager("tower_Third");
            em.startInstance(pi.getPlayer());
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第三座塔樓目前擁擠，請稍後再試"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第三座塔樓已關閉，需要找到第三座塔的鑰匙打開它"));
    return false;
}
