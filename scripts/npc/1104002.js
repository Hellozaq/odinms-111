/*
     名字：艾雷諾爾
     地图：寧靜的耶雷弗
     描述：913030000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20407)).getStatus() != 1) {
        cm.sendOk("...HaHaHa...又來了一個不中用的騎士，看來你還沒有做好跟我決鬥的準備，去跟那只笨手笨腳的#b大鳥#k好好談談再來吧。");
        cm.dispose();
        return;
    }
    cm.sendAcceptDecline("HaHaHaHa......HaHa！這裡的女皇已經被我控制住了，這將是#b黑色翅膀#k傾覆楓之谷的一大進展……你還想跟我們作對嗎？");
}

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            cm.sendOk("HaHaHaHa......你果然也是一個不重用的騎士。");
            break;
        case 1:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001010), new java.awt.Point(-430, 88));
    }
    cm.dispose();
}
