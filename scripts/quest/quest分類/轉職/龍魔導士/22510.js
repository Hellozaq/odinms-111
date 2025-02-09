/*
     名字：信件的送達
     地图：農場中心地
     描述：100030300
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("嗯？有什麼事嗎，龍魔導士！！又來幫爸爸幹活嗎？嗯.....你去教訓了#o1210111#？哎呀！沒受傷吧？");
            break;
        case 1:
            qm.sendNextPrev("那就好，但是這樣做會很危險，以後你要小心！！啊，對了，你能幫爸爸跑一趟嗎？");
            break;
        case 2:
            qm.sendAcceptDecline("因為奇怪的肥肥的緣故，本來早就應該送過去的豬肉估計不能按時送過去了，你能把這封說明信#v4032455#拿給#b#m100000000##k的#b#p1012003##k嗎？");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(22510).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4032455, qm.getPlayer().itemQuantity(4032455) ? 0 : 1);
            qm.dispose();
    }
}
