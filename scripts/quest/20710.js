/*
     名字：藏在垃圾桶內的東西
     地图：墮落城市
     描述：103000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("什麼？你拒絕我嗎？好吧，你要拒絕我也沒有辦法。我就向那因哈特一五一十的報告吧。");
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
            qm.sendAcceptDecline("其實…我真不敢相信，但是你說是騎士團員那就沒辦法了。又沒有其他人可以幫助調查…那就說明這次的任務吧。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20710).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
