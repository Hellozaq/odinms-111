/*
     名字：伊麗娜
     地图：提弗森林
     描述：913002100
 */

function start() {
    if (cm.getPlayer().getJob() != 1310) {
        cm.sendOk("附近區域已經開始加強警戒，不會讓入侵者逃脫的。");
        cm.dispose();
        return;
    }
    cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
    cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001009), new java.awt.Point(500, -522));
    cm.dispose();
}
