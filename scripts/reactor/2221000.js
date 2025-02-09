/*
     名字：隱藏地圖
     地图：深山凶宅
     描述：222010401
 */

function act() {
    rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(7130400), new java.awt.Point(1286, 148));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "黃色鬼怪出現了"));
}

//2022050豬肉串
