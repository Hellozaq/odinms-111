/*
     名字：雖然可愛的模樣也是沒有關係…
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 3) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23263)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23263).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendSimple("這個！知道你一定可以找到！\r\n#L0##b我並沒有認真去找，只是不小心找到了而已。#l");
            break;
        case 1:
            qm.sendPrev("不管怎麼樣還是感謝你。現在應該可找回樣子的。讓我們開始測試一下外星人鐳射槍的作用吧！！！#h0#！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30000 exp");
            break;
        case 2:
            qm.dispose();
            qm.gainExp(30000);
            qm.gainItem(4032971, -1);
            Packages.server.quest.MapleQuest.getInstance(23263).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(931050210), qm.getMap(931050210).getPortal(0));
    }
}
