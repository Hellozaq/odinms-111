/*
     名字：威廉的古堡
     地图：水路之迷宮
     描述：990000610
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("secretgate1").getState() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(990000611), pi.getMap(990000611).getPortal(1)); //迷宮之盡頭
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "迷宮之盡頭的門關閉著，需要供奉一些鬼王標誌打開它"));
    return false;
}
