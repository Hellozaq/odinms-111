/*
     名字：生存的法則
     地图：秘密據點
     描述：103000003
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
            qm.sendAcceptDecline("我想測定一下你的實力，所以要進行簡單的適應訓練，看看你是否具備#b適應環境#k的能力。你是否現在就想接受考驗？");
            break;
        case 1:
            if (qm.getMap(910310100).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(910310100).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910310100), qm.getMap(910310100).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(103000003));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "盜賊的基地目前擁擠，請稍後再試。");
            qm.dispose();
    }
}

function end(mode, type, selection) {
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
            if (qm.getMap().getAllMonstersThreadsafe().size() > 0) {
                qm.sendOk("請消滅完地圖裡面所有的#b三眼章魚#k再來與我交談。");
                qm.dispose();
                return;
            }
            qm.sendAcceptDecline("呼呼，這種程度不算什麼吧？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 400 exp");
            break;
        case 1:
            qm.forceCompleteQuest();
            qm.gainExp(400);
            qm.dispose();
    }
}
