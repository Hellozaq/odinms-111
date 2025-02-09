/*
     名字：冰雪峽谷
     地图：萬年冰河洞穴
     描述：921120500
 */

function act() {
    rm.getReactor().forceTrigger();
    //rm.getReactor().delayedDestroyReactor(1000);
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "雷克斯出現了"));
    rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300281), new java.awt.Point(rm.getReactor().getPosition()));
}
