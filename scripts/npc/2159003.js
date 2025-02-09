/*
     名字：俊
     地图：人煙稀少的石山
     描述：931000001
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
            if (cm.getPlayer().getInfoQuest(23999).indexOf("exp1=1") != -1) {
                cm.sendOk("找到烏利卡和班了嗎？由其是班特別會躲，有仔細的找嗎？");
                cm.dispose();
                return;
            }
            cm.sendNext("啊！被發現了！");
            break;
        case 1:
            cm.sendNextPrev("嗚…本來想躲到礦車裡面，但是頭進不去…");
            break;
        case 2:
            cm.sendPrev("找到烏利卡和班了嗎？由其是班特別會躲，有仔細的找嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5 exp");
            break;
        case 3:
            cm.gainExp(5);
            cm.getPlayer().updateInfoQuest(23999, cm.getPlayer().getInfoQuest(23999) + ";exp1=1");
            cm.dispose();
    }
}
