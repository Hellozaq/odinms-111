/*
     名字：奇怪的禮物
     地图：勇士聖殿
     描述：102000003
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
            qm.sendAcceptDecline("為什麼？你想知道禮物箱內有什麼東西嗎？看你很好奇的眼神。那就一起解開吧？");
            break;
        case 1:
            if (qm.getMap(910220100).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(910220100).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910220100), qm.getMap(910220100).getPortal(0));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(102000003));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "解開禮物箱目前擁擠，請稍後再試。");
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
            if (qm.getMap().getAllMonstersThreadsafe().size() > 0) {
                qm.sendOk("果然...和我想的一樣。快把#b#o1140130##k全部都處理掉。");
                qm.dispose();
                return;
            }
            qm.sendNext("你並沒有疏忽修練，處理的很好，別那麼驚訝的表情。這一定是十隻魔精靈又被酋長騙了。除了他之外沒有人會用這麼幼稚的手段。他雖然很強，但是個性很古怪…\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 400 exp");
            break;
        case 1:
            qm.forceCompleteQuest();
            qm.getPlayer().changeMap(qm.getMap(102000003), qm.getMap(102000003).getPortal(0));
            qm.gainExp(400);
            qm.dispose();
    }
}
