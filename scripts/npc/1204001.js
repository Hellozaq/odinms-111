/*
     名字：普蘭西斯
     地图：傀儡師洞窟
     描述：910510200
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
            cm.sendNext("我是黑色翅膀的傀儡師普蘭西斯，你已經好幾次拿走了我放置的玩偶………一直妨礙我的工作，快氣死人了！！我這次就原諒你，如果你膽敢在妨礙我一次………我會以#b黑魔法師#k大人的名義發誓，絕不放過你。");
            break;
        case 1:
            cm.sendPrevS("……黑色翅膀？妨礙?……到底是什麼事啊？從怪物哪裡找玩偶，這和黑魔法師到底有什麼關係啊？去找#b特魯#k商量看看。", 3);
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(21760).forceStart(cm.getPlayer(), 0, 0);
            cm.getPlayer().changeMap(cm.getMap(104000000), cm.getMap(104000000).getPortal(0));
            cm.dispose();
    }
}
