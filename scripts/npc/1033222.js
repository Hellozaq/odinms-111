/*
     名字：赫麗娜
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
            cm.sendNext("怎麼回事，精靈遊俠？！剛才聽到吵吵鬧鬧的……嗯？襲擊？你沒受傷吧？！");
            break;
        case 1:
            cm.sendNextPrev("誰會在弓箭手村做這種事呢……詳細的情況我們進去再說！");
            break;
        case 2:
            cm.dispose();
            cm.getPlayer().changeMap(cm.getMap(100000201), cm.getMap(100000201).getPortal(0));
            Packages.server.quest.MapleQuest.getInstance(24095).forceStart(cm.getPlayer(), 0, 1);
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
    }
}
