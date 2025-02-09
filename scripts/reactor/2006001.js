/*
     名字：隱密之地
     地图：雅典娜禁地&amp;lt;中央塔&gt;
     描述：920010100
 */

function act() {
    var eim = rm.getPlayer().getEventInstance();

    eim.stopEventTimer();
    eim.startEventTimer(5 * 60000); //bonus time
    rm.getPlayer().getMap().spawnNpc(2013002, new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於生命草的力量，雅典娜蘇醒了，封鎖塔內的一切魔法被解除"));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
}

//4001055生命草
