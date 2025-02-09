/*
     名字：普蘭西斯
     地图：傀儡師的洞穴
     描述：910510000
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
            cm.sendNext("你這個傢夥……你是怎麼進來的？我不是警告過你，叫你別跟我作對嗎？");
            break;
        case 1:
            cm.sendNextPrevS("你到底在做什麼啊？操控怪物想做什麼呢？快說出黑色翅膀的目的。");
            break;
        case 2:
            cm.sendPrev("哼！我才不告訴你，給我立刻消失。");
            break;
        case 3:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300344), new java.awt.Point(479, 245));
            cm.dispose();
    }
}
