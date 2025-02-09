/*
     名字：普蘭西斯
     地图：危險的資料商店
     描述：910400000
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
            cm.sendNext("哼……真的找來了，太容易了？看來你的變身術還是有點用處的嘛。巴羅克，你先回去吧。");
            break;
        case 1:
            cm.sendNextS("切……這筆賬以後再算。", 5, 1204004);
            cm.getPlayer().getMap().killMonster(9300382);
            break;
        case 2:
            cm.sendNextS("見到你真好。之前因為和皇家騎士團的騎士們戰鬥完，已經沒什麼餘力了，才會讓你得逞，這次我可沒那麼好惹了！礙眼的傢伙，消失掉把！", 1);
            break;
        case 3:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300345), new java.awt.Point(140, 120));
            cm.dispose();
    }
}
