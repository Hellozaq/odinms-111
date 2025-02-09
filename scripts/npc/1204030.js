/*
     名字：保管庫書桌
     地图：危險的圖書館
     描述：930010000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21764)).getStatus() > 0) {
        cm.sendOkS("封印石已經被紳士搶走了，去找赫麗娜。", 3);
        cm.dispose();
        return;
    }
    Packages.server.quest.MapleQuest.getInstance(21764).forceStart(cm.getPlayer(), 0, 1);
    cm.sendOk("封印石應該會在這裡的某個地方啊……咦，怎麼是空的？難道是黑色翅膀已經？！");
    cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300353), new java.awt.Point(-249, 68));
    cm.dispose();
}
