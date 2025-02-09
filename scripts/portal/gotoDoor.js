/*
     名字：黑暗時間神殿
     地图：時間神殿迴廊2
     描述：272010100
 */

function enter(pi) {
    var em = pi.getEventManager("Arkarium");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        em.startInstance(pi.getPlayer());
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "黑魔法師的房前迴廊目前擁擠，請稍後再試"));
    return false;
}
