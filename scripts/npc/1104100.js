/*
     名字：米哈逸
     地图：提姆森林
     描述：913002200
 */

function start() {
    if (cm.getPlayer().getJob() != 1110) {
        cm.sendOk("提姆森林附近都蒐索了，沒有發現可疑的人。");
        cm.dispose();
        return;
    }
    cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
    cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001009), new java.awt.Point(2830, 78));
    cm.dispose();
}
