/*
     名字：組隊任務
     地图：機智的測試
     描述：610030400
 */

function act() {
    var nun = rm.getPlayer().getMap().getReactorByName("4skill0a").getState() + rm.getPlayer().getMap().getReactorByName("4skill1a").getState() + rm.getPlayer().getMap().getReactorByName("4skill2a").getState() + rm.getPlayer().getMap().getReactorByName("4skill3a").getState() + rm.getPlayer().getMap().getReactorByName("4skill4a").getState();
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "弓箭手印記已激活！還差" + (10 - nun) + "個印記啟動，才能開啟傳送門"));
    if (nun > 9) {
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的入口，已經開啟"));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("4pt", 2));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
    }
}
