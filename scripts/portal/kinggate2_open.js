/*
     名字：威廉的古堡
     地图：死亡迴廊
     描述：990000800
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("kinggate").getState() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(990000900), pi.getMap(990000900).getPortal(2)); //惡靈13的王座
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "這個裂縫似乎被附近的門擋住了"));
    return false;
}
