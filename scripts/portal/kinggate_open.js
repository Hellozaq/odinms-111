/*
     名字：威廉的古堡
     地图：死亡迴廊
     描述：990000800
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("kinggate").getState() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(990000900), pi.getMap(990000900).getPortal(1)); //惡靈13的王座
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "惡靈13的王座的門關閉著，需要獻祭某樣物品打開它"));
    return false;
}
