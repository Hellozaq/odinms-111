/*
     名字：武英
     地图：被封印的寺院
     描述：925040100
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
            cm.sendNext("我一直在等你……英雄的後裔啊……");
            break;
        case 1:
            cm.sendNextPrevS("英雄的後裔……？影子武士似乎知道一些關於英雄的事情。不過，他好像也和武公一樣，不認為我是英雄本人啊。");
            break;
        case 2:
            cm.sendNextPrev("這個武陵封印石是英雄們撒下的種子……但收穫的卻是我們黑色翅膀的東西。雖然你很漂亮的打敗了普蘭西斯和塔古斯……再也不能讓你為所欲為了。");
            break;
        case 3:
            cm.sendNextPrev("英雄的後裔終於和敵人見面了，真是讓人感概萬分……這也是沒辦法的事情，我要以黑色翅膀的名義，幹掉你！");
            break;
        case 4:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300351), new java.awt.Point(897, 51));
            cm.dispose();
    }
}
