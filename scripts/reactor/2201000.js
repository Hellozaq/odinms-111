/*
     名字：隱藏地圖
     地图：玩偶之家
     描述：922000020
 */

function act() {
    for (var i = 0; i < 10; i++)
        rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300011), new java.awt.Point(rm.getReactor().getPosition()));
    rm.getClient().getSession().write(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "木馬士兵從箱子裏跑了出來"));
}
