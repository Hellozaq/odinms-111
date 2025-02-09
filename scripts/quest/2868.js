/*
     名字：靈魂的幫助
     地图：墮落城市醫院
     描述：103000004
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
            qm.sendNext("有可能是某個人遭到冥界幽靈的襲擊而變成幽靈，遊蕩在地鐵站裡？");
            break;
        case 1:
            qm.sendAcceptDecline("難道是像我一樣，不知道自身的存在而遊蕩的嗎？好吧。和我一起去確定一下吧。");
            break;
        case 2:
            if (qm.getMap(103020420).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(103020420).resetFully();
                qm.getPlayer().changeMap(qm.getMap(103020420), qm.getMap(103020420).getPortal(3));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(103000004));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "2號線第3區段目前擁擠，請稍後再試。");
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
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
            qm.sendNext("目前在這裡找不到一絲可疑的氣息，不知道之前有沒有…");
            break;
        case 1:
            qm.sendPrev("我得回到墮落城市醫院去了…\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1200 exp");
            break;
        case 2:
            qm.forceCompleteQuest();
            qm.getPlayer().changeMap(qm.getMap(103000004), qm.getMap(103000004).getPortal(0));
            qm.gainExp(1200);
            qm.dispose();
    }
}
