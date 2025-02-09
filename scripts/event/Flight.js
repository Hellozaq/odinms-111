/*
     名字：神木村
     地图：神木村售票處
     描述：240000100
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
    em.warpAllPlayer(200000132, 200090200);
    em.warpAllPlayer(240000111, 200090210);
    em.getChannelServer().getMapFactory().getMap(200000131).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(2));
    em.getChannelServer().getMapFactory().getMap(240000110).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(2));
    em.schedule("arrived", 420000); //The time that require move to destination
}

function arrived() {
    em.warpAllPlayer(200090200, 240000100);
    em.warpAllPlayer(200090210, 200000100);
    em.getChannelServer().getMapFactory().getMap(200000131).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(1));
    em.getChannelServer().getMapFactory().getMap(240000110).broadcastMessage(Packages.tools.packet.EtcPacket.setBoatState(1));
    scheduleNew();
}

function cancelSchedule() {
}
