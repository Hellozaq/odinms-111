/*
     名字：馬來西亞
     地图：夢幻主題公園
     描述：551030200
 */

function act() {
    rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9420546), new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "娃娃獅王出現了"));
}

//4032246夢幻公園的意念
