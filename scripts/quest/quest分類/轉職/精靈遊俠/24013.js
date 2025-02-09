/*
     名字：精靈的英雄 4轉
     地图：偉大的精神降臨
     描述：910150100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            qm.sendYesNo("……精靈之王精靈遊俠……你已經具備了提升新能力的資格，我允許你獲得國王之力。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(24013).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(2312);
            qm.dispose();
    }
}
