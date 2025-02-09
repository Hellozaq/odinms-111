/*
     名字：隱藏地圖
     地图：令人不適的實驗室
     描述：926110100
 */

function act() {
    if (rm.getReactor().getState() > 6) {
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "其中一個燒杯已經完成"));
        rm.getPlayer().getMap().getReactorById(2618006).forceHitReactor(rm.getPlayer().getMap().getReactorById(2618006).getState() + 1);
    }
    if (rm.getPlayer().getMap().getReactorById(2618006).getState() > 2) {
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的傳送門已經開啟"));
    }
}
