/*
     名字：沒有結束的修煉
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
            qm.sendAcceptDecline("不會是等級超過100級就忽略了修練吧？你雖然很強但是修練還沒有結束。請效法騎士團長。就是他們為了對抗黑魔法師從不間斷的進行修練。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20600).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
