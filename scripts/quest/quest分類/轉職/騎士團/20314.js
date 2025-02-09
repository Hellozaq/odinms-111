/*
     名字：神獸的眼淚
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            qm.sendNext("你從變身術師那裡帶回的寶石是神獸的眼淚，這是它力量的結晶。如果黑魔法師掌握了這一點，那麼對我們所有人來說都是厄運。");
            break;
        case 1:
            qm.sendYesNo("為了表彰你在防止潜在的嚴重災難方面所做出的努力，西格諾斯女皇賜予你一個新的骑士頭銜，你做好接受的準備了嗎？");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20314).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(1411);
            qm.gainItem(4032179, -1);
            qm.gainItem(4032104, -1);
            qm.sendOk("從現在起，你就是高级骑士，皇家騎士團的高级骑士，請你永遠捍衛著這份榮耀，願你的以后的人生都能像現在一樣璀璨。");
            break;
        case 3:
            qm.dispose();
    }
}
