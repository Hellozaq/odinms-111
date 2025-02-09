/*
     名字：傀儡的邀請
     地图：傀儡師洞窟
     描述：910510200
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("沒有膽量來會見我麼？呵呵！");
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
            qm.sendNext("莫非你是前不久在魔法森林地區調查我的那個人？終於找到你了！我找你找得好辛苦，知道嗎？");
            break;
        case 1:
            qm.sendNextPrevS("你到底是誰？");
            break;
        case 2:
            qm.sendAcceptDecline("我？你想知道的話就來我的洞穴吧，我想好好招待你一番。點擊接受按鈕就能立刻移動到我家，我在那裡等你！");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21719).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(910510200), qm.getMap(910510200).getPortal(0));
            qm.dispose();
    }
}
