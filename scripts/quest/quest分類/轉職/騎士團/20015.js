/*
     名字：小女皇的問候
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
                qm.sendOk("我知道你猶豫了，但是我可以看到你的勇氣，還沒有迸發出來…");
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
            qm.sendNext("你知道嗎？楓之谷看起來很和平，但是在某些地方卻充滿了黑暗的力量。即將要復活的黑魔法師正威脅著楓之谷的世界！");
            break;
        case 1:
            qm.sendNextPrev("作為楓之谷世界的守護者，我們不能在這裡坐以待斃，敵人越來越強大，我們需要更多對策。");
            break;
        case 2:
            qm.sendYesNo("你想保護楓之谷的世界嗎？如果你能成為楓之谷的騎士，那麼就有力量為楓之谷的世界做出一番貢獻。");
            break;
        case 3:
            qm.sendPrev("那因哈特，是我的策士，他就在我的旁邊，他會指導你如何成為一名合格的楓之谷騎士，希望你成功。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(20015).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
