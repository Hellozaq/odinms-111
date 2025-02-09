/*
     名字：隱藏地圖
     地图：特殊實驗室
     描述：926100200
 */

function act() {
    rm.getMap(rm.getPlayer().getMap().getId() + 2).getReactorById(2618004).forceHitReactor(1);
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "漆黑的研究室1自動門已打開"));
}
