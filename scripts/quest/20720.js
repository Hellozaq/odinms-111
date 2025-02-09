/*
     名字：勇士之村派遣任務開始前
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
            qm.sendAcceptDecline("這段時間升級還順利嗎？現在應該在墮落城市進行組隊任務吧。雖然升級重要，但是還是要暫時接受騎士團的任務了。因為有新的情報來了。");
            break;
        case 1:
            qm.sendPrev("在任務開始之前，請你先回來耶雷弗一趟，我有一件東西要交給你，一定要儘快回來哦。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20720).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
