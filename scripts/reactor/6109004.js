/*
     名字：組隊任務
     地图：被遺忘的儲蓄室
     描述：610030200
 */

function act() {
    switch (rm.getPlayer().getMap().getId()) {
        case 610030200:
            var nun = rm.getPlayer().getMap().getReactorByName("2skill0").getState() + rm.getPlayer().getMap().getReactorByName("2skill1").getState() + rm.getPlayer().getMap().getReactorByName("2skill2").getState() + rm.getPlayer().getMap().getReactorByName("2skill3").getState() + rm.getPlayer().getMap().getReactorByName("2skill4").getState();
            rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "海盜印記已激活！還差" + (5 - nun) + "個印記啟動，才能開啟傳送門"));
            if (nun > 4) {
                rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的入口，已經開啟"));
                rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("2pt", 2));
                rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
            }
            break;
        case 610030300:
            rm.getPlayer().getMap().moveEnvironment("menhir5", 1);
            var nun = rm.getPlayer().getMap().getReactorByName("3skill0").getState() + rm.getPlayer().getMap().getReactorByName("3skill1").getState() + rm.getPlayer().getMap().getReactorByName("3skill2").getState() + rm.getPlayer().getMap().getReactorByName("3skill3").getState() + rm.getPlayer().getMap().getReactorByName("3skill4").getState();
            rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "海盜印記已激活！区域的防禦系統開始運作！還差" + (5 - nun) + "個印記啟動，才能開啟底部的傳送門"));
            if (nun > 4) {
                rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的入口，已經開啟"));
                rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("3pt", 2));
                rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
            }
    }
}
