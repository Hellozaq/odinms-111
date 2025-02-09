/*
     名字：亞歲
     地图：納希月臺
     描述：260000100
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
    em.warpAllPlayer(200000152, 200090400);
    em.warpAllPlayer(260000110, 200090410);
    em.getChannelServer().getMapFactory().getMap(200000151).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(2));
    em.getChannelServer().getMapFactory().getMap(260000100).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(2));
    em.schedule("arrived", 420000); //The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(200090400, 260000100);
    em.warpAllPlayer(200090410, 200000100);
    em.getChannelServer().getMapFactory().getMap(200000151).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(1));
    em.getChannelServer().getMapFactory().getMap(260000100).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(1));
    scheduleNew();
}

function cancelSchedule() {
}
