/*
     名字：烏利卡
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
            if (cm.getPlayer().getInfoQuest(23999).indexOf("exp2=1") != -1) {
                cm.sendOk("找到俊和班了嗎，班相當難找吧？可以找的地方全找找看唷。");
                cm.dispose();
                return;
            }
            cm.sendNext("被發現了嗎，哈哈哈…我躲的地方太容易被找到了嗎？");
            break;
        case 1:
            cm.sendPrev("找到俊和班了嗎，班相當難找吧？\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5 exp");
            break;
        case 2:
            cm.gainExp(5);
            cm.getPlayer().updateInfoQuest(23999, cm.getPlayer().getInfoQuest(23999) + ";exp2=1");
            cm.dispose();
    }
}
