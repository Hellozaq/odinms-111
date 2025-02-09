/*
     名字：楓葉古城
     地图：城堡內室2
     描述：800040401
 */

function enter(pi) {

    var em = pi.getEventManager("EmperorToad");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        if (pi.getPlayer().getParty() == null) {
            em.startInstance(pi.getPlayer());
            return true;
        }
        em.startInstance(pi.getPlayer().getParty(), pi.getPlayer().getMap(), 200);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "天守閣室目前擁擠，請稍後再試"));
    return false;
}
