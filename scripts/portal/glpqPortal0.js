/*
     名字：組隊任務
     地图：內部密室的走廊
     描述：610030100
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("mob0").getState() > 0) {
        pi.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "有一個冒險家通過了入口"));
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(610030200), pi.getMap(610030200).getPortal(0)); //被遺忘的儲蓄室
    }
    return false;
}
