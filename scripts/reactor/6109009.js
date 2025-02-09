/*
     名字：組隊任務
     地图：團結的測試
     描述：610030500
 */

function act() {
    var nun = rm.getPlayer().getMap().getReactorByName("5weapon0").getState() + rm.getPlayer().getMap().getReactorByName("5weapon1").getState() + rm.getPlayer().getMap().getReactorByName("5weapon2").getState() + rm.getPlayer().getMap().getReactorByName("5weapon3").getState() + rm.getPlayer().getMap().getReactorByName("5weapon4").getState();
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "禁戒之枪被還原為大師的遺物。還差" + (5 - nun) + "件遺物，才能開啟傳送門"));
    if (nun > 4) {
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的入口，已經開啟"));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("5pt", 2));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
    }
}
