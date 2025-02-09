/*
     名字：奧茲
     地图：提諾森林
     描述：913002000
 */

function start() {
    if (cm.getPlayer().getJob() != 1210) {
        cm.sendOk("入侵者不在這個地區，這附近的區域已經蒐索過了。");
        cm.dispose();
        return;
    }
    cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
    cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001009), new java.awt.Point(3395, -322));
    cm.dispose();
}
