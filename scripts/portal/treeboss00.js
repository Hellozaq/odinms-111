/*
     名字：新加坡
     地图：克雷塞爾遺跡 I
     描述：541020700
 */

function enter(pi) {

    if (!pi.getPlayer().itemQuantity(4000385)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通道已關閉，需要找到拉塔尼卡船長的靈魂燈籠打開它"));
        return false;
    }
    var em = pi.getEventManager("Krexel");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        pi.gainItem(4000385, -1);
        if (pi.getPlayer().getParty() == null) {
            em.startInstance(pi.getPlayer());
            return true;
        }
        em.startInstance(pi.getPlayer().getParty(), pi.getPlayer().getMap(), 200);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "克雷塞爾遺跡 II目前擁擠，請稍後再試"));
    return false;
}
