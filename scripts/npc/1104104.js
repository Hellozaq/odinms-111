/*
     名字：鷹眼
     地图：練武場入口
     描述：913002400
 */

function start() {
    if (cm.getPlayer().getJob() != 1510) {
        cm.sendOk("我一直都在練武場，沒有發現可疑的人。");
        cm.dispose();
        return;
    }
    cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
    cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001009), new java.awt.Point(372, 70));
    cm.dispose();
}
