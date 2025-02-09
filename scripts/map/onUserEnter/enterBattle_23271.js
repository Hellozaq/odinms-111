/*
     名字：隐藏地图
     地图：沙漠的角落2
     描述：926030010
 */

function start() {
    ms.getPlayer().startMapTimeLimitTask(600, ms.getMap(260020300));
    ms.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("擊敗奇怪的法師一夥，找回禁忌煉金書"));
    ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300457), new java.awt.Point(802, 199));
    ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300457), new java.awt.Point(600, 275));
    ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300458), new java.awt.Point(702, 199));
    ms.dispose();
}
