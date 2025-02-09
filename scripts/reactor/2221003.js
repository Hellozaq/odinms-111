/*
     名字：路德斯湖
     地图：童話村
     描述：222000000
 */

function act() {
    rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9500400), new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "一顆葫蘆長了出來"));
}

//4031244興夫的葫蘆種子
