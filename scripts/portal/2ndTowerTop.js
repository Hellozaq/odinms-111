/*
     名字：獅子王城
     地图：第二座塔
     描述：211060400
 */

function enter(pi) {
    if (pi.getPlayer().itemQuantity(4032833)) {
        if (pi.getMap(211060401).getCharacters().size() < 1) {
            var em = pi.getEventManager("tower_Second");
            em.startInstance(pi.getPlayer());
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第二座塔樓目前擁擠，請稍後再試"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第二座塔樓已關閉，需要找到第二座塔的鑰匙打開它"));
    return false;
}
