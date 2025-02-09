/*
     名字：精靈的英雄 3轉
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
                qm.sendOk("我可以讓你的力量覺醒，現在你還在猶豫什麼呢？");
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
            qm.sendYesNo("……好久不見，精靈之王精靈遊俠，尋找國王之力的人……你已經找回了原來的大部分能力。現在的你，有資格獲得國王之力。");
            break;
        case 1:
            qm.sendNextPrev("年輕的精靈之王，希望你能將所有的精靈們帶向勝利。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(24012).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(2311);
            qm.dispose();
    }
}
