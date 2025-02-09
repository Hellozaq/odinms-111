/*
     名字：外星人殲滅戰
     地图：新葉城
     描述：600000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("外星人在新葉城肆意妄為，請你幫幫我們。");
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
            qm.sendYesNo("外星人把城外的路挖得到處都是坑，討厭死了！請你阻止它們，別讓它們繼續破壞我們的土地！");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(28780).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            if (qm.getPlayer().itemQuantity(4033190) < 100) {
                qm.sendOk("你還沒弄到100 #b#v4033190# #t4033190##k回來嗎？");
                qm.dispose();
                return;
            }
            qm.sendNext("噢！已經集齊了100個#b#v4033190# #t4033190##k？！不可思議……");
            break;
        case 1:
            qm.sendPrev("真的是太厲害了！這下他們有得頭痛了！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 150000 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(28780).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28780)).setStatus(0);
            qm.gainItem(4033190, -100);
            qm.gainExp(150000);
            qm.dispose();
    }
}
