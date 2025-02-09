/*
     名字：毒霧森林
     地图：森林空地
     描述：930000500
 */

function act() {
    if (rm.getReactor().getName() == "an3") {
        rm.dropItems();
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "紫色魔力石找到了"));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
    }
}

//4001163紫色魔力石
