/*
     名字：[十字獵人]路德斯湖派遣
     地图：補給品倉庫
     描述：931050500
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1 || status == 2) {
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
            qm.sendYesNo("你的任務就是發現在楓之谷世界各處的時空門的真相，現在就正式開始十字獵人的任務嗎？");
            break;
        case 1:
            qm.sendNextPrev("首先，請你去調查玩具城時間隧道地區出現的時空門吧。我之前派去的洋正在等你。洋調查過時間分岔道，所以應該就在那裡。");
            break;
        case 2:
            qm.sendAcceptDecline("現在就出發吧。");
            break;
        case 3:
            qm.sendNext("那麼，祝你成功。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(1619).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
