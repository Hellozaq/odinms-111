/*
     名字：新加坡
     地图：幽靈船7
     描述：541010060
 */

function enter(pi) {

    var em = pi.getEventManager("GhostShip");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        if (pi.getPlayer().getParty() == null) {
            em.startInstance(pi.getPlayer());
            return true;
        }

        em.startInstance(pi.getPlayer().getParty(), pi.getPlayer().getMap(), 200);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "引擎室目前擁擠，請稍後再試"));
    return false;
}
