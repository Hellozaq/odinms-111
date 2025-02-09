/*
     名字：結冰的精靈森林
     地图：發光的洞穴之路
     描述：910150002
 */

function enter(pi) {
    var em = pi.getEventManager("DanikaRequest");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        em.startInstance(pi.getPlayer());
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "盛開的森林目前擁擠，請稍後再試"));
    return false;
}
