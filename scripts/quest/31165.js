/*
     名字：探查時間的裂縫
     地图：三扇門
     描述：270000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
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
            qm.sendNext("這就是那個裂縫啊，解謎的時間到了，阿卡伊農、時空門、時間神殿的裂縫…");
            break;
        case 1:
            qm.sendNextPrev("俗話說不入虎穴，焉得虎子，要想解開所有的問題，必須直接進入裂縫內部。");
            break;
        case 2:
            qm.sendAcceptDecline("克勞烏和雪麗已經在為新任務做準備了，你做好執行新任務的準備了嗎？");
            break;
        case 3:
            qm.sendPrev("請確認一下裂縫裡面有什麼東西，如果在裂縫裡遇到了阿卡伊農……啊，沒什麼，請通過右邊的傳送口進去，請千萬小心。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(31165).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
