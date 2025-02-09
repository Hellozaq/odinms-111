/*
     名字：毒霧森林
     地图：毒霧森林
     描述：930000000
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getId() == 930000000) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(930000010), pi.getMap(930000010).getPortal(0)); //初入森林
        return true;
    }
    if (pi.getPlayer().getMap().getId() == 930000010) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(930000100), pi.getMap(930000100).getPortal(0)); //初入森林
        return true;
    }
    if (pi.getPlayer().getMap().getId() == 930000100) {
        if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(930000200), pi.getMap(930000200).getPortal(0)); //變質的森林
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    if (pi.getPlayer().getMap().getId() == 930000200) {
        if (pi.getPlayer().getMap().getReactorByName("spine").getState() < 4) {
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於脊椎的阻擋，通道已關閉"));
            return false;
        }
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(930000300), pi.getMap(930000300).getPortal(1)); //濃霧森林
    }
    return true;
}
