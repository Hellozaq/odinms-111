/*
     名字：外星基地
     地图：外星物質複製機入口
     描述：610040800
 */

function enter(pi) {
    var em = pi.getEventManager("Extraterrestrial");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        if (pi.getPlayer().getParty() == null) {
            em.startInstance(pi.getPlayer());
            return true;
        }
        em.startInstance(pi.getPlayer().getParty(), pi.getPlayer().getMap(), 200);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "外星物質複製機目前擁擠，請稍後再試"));
    return false;
}
