/*
     名字：毒霧森林
     地图：劇毒森林
     描述：930000600
 */

function act() {
    rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300180), new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "毒石巨人出現了"));
}

//4001163紫色魔力石
