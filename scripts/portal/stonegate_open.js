/*
     名字：威廉的古堡
     地图：騎士大廳
     描述：990000400
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("stonegate").getState() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(990000430), pi.getMap(990000430).getPortal(1)); //信念之室
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "信念之室的門關閉著，需要找到一把鑰匙打開它"));
    return false;
}
