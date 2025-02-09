/*
     名字：隱密之地
     地图：雅典娜禁地&amp;lt;庭園&gt;
     描述：920010800
 */

function act() {
    rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300049), new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "黑色的女神的食人花出現了"));
}
