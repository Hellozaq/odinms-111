/*
     名字：普蘭西斯
     地图：受到攻擊的弓箭手村右側
     描述：910080010
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendNext("找到了！你就是精靈遊俠啊！");
            break;
        case 1:
            cm.sendNextPrevS("……嗯？你是誰？小孩子找我幹嘛……", 3);
            break;
        case 2:
            cm.sendNextPrev("小……小孩子？！閉嘴！我要在赫麗娜來之前把你幹掉！");
            break;
        case 3:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300285), new java.awt.Point(5550, 454));

            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300429), new java.awt.Point(5348, 34));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300429), new java.awt.Point(5272, 60));
            for (var i = 0; i < 10; i++) {
                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300429), new java.awt.Point(4800 + (Math.random() * 1200), 454));
            }
            cm.dispose();
    }
}
