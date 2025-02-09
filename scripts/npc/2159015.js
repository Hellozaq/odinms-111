/*
     名字：小可愛
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
            if (cm.getPlayer().getInfoQuest(23999).indexOf("exp3=1") != -1) {
                cm.sendOk("哈哈哈…我很會躲吧？");
                cm.dispose();
                return;
            }
            cm.sendNext("哎喲，被發現了！哇…真會找，好厲害喔！\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 exp");
            break;
        case 1:
            cm.dispose();
            cm.gainExp(3);
            cm.getPlayer().updateInfoQuest(23999, cm.getPlayer().getInfoQuest(23999) + ";exp3=1");
    }
}
