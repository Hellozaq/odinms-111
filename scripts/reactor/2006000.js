/*
     名字：隱密之地
     地图：雅典娜禁地&amp;lt;岔路&gt;
     描述：920010000
 */

function act() {
    rm.getPlayer().getMap().spawnNpc(2013001, new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "謝謝你們把我釋放出來，請儘快去救救雅典娜吧，她被爸爸精靈封印在塔中央破碎的雕像裏，無法動彈"));
}
