/*
     名字：剪票員
     地图：碼頭&amp;lt;開往玩具城&gt;
     描述：200000121
 */

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("docked", "true");
    em.setProperty("entry", "true");
    em.schedule("stopEntry", 240000); //The time to close the gate
    em.schedule("takeoff", 300000); //The time to begin the ride
}

function stopEntry() {
    em.setProperty("entry", "false");
}

function takeoff() {
    em.setProperty("docked", "false");
    em.warpAllPlayer(200000122, 200090100);
    em.warpAllPlayer(220000111, 200090110);
    em.getChannelServer().getMapFactory().getMap(200000121).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(2));
    em.getChannelServer().getMapFactory().getMap(220000110).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(2));
    em.schedule("arrived", 420000); //The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(200090100, 220000110); // from orbis
    em.warpAllPlayer(200090110, 200000121); // from ludi
    em.getChannelServer().getMapFactory().getMap(200000121).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(1));
    em.getChannelServer().getMapFactory().getMap(220000110).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(1));
    scheduleNew();
}

function cancelSchedule() {
}
