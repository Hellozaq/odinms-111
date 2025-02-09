/*
     名字：伊卡勒特
     地图：提魯森林
     描述：913002300
 */

function start() {
    if (cm.getPlayer().getJob() != 1410) {
        cm.sendOk("是來尋找入侵者的嗎？沒有在這裡出現。");
        cm.dispose();
        return;
    }
    cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
    cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001009), new java.awt.Point(-2263, -582));
    cm.dispose();
}
