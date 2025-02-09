/*
     名字：威廉的古堡
     地图：信念之室
     描述：990000430
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("metalgate").getState() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(990000431), pi.getMap(990000431).getPortal(1)); //承諾之室
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "承諾之室的門已關閉，需要找到一把鑰匙打開它"));
    return false;
}
