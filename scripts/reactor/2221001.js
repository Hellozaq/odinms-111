/*
     名字：隱藏地圖
     地图：深山凶宅
     描述：222010401
 */

function act() {
    rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(7130401), new java.awt.Point(993, 148));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "藍色鬼怪出現了"));
}

//2022052榖茶
