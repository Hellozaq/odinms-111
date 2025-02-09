/*
     名字：影子武士
     地图：飄飄的奇幻村
     描述：910510400
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
            cm.sendNext("我正在等你……精靈遊俠。");
            break;
        case 1:
            cm.sendNextPrevS("你是誰？為什麼給我寫信。", 3);
            break;
        case 2:
            cm.sendNextPrev("聽說你是精靈之中，只有極少數人才會使用雙弩槍的高手，是擁有很強力量的人……我想證實那個傳聞是不是真的。");
            break;
        case 3:
            cm.sendNextPrevS("(會不會是和黑色翅膀有關的人呢？不管怎樣，不能聽了那樣的話而逃避……為精靈的榮譽而戰吧！)", 3);
            break;
        case 4:
            cm.sendNextPrev("真正的強者，應該不會逃避挑戰吧？讓我們決一勝負吧！");
            break;
        case 5:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300431), new java.awt.Point(650, 236));
            cm.dispose();
    }
}
