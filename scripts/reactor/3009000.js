/*
     名字：毒霧森林
     地图：變質的森林
     描述：930000200
 */

function act() {
    if (rm.getReactor().getState() > 3) {
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "刺藤已經消除，道路已經開啟"));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
    }
}
