/*
     名字：騎士的品格
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
            if (status > 0) {
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
            qm.sendNext("你到了100級，騎寵還是普通提提阿那嗎？看你臉都紅了，你覺得這樣能保持高級騎士的品味嗎？");
            break;
        case 1:
            qm.sendAcceptDecline("相信每個人都會和你說，你這種行為會給女皇的名譽帶來影響。希望你為女皇著想，作出正確的行動，你去見見#b#p1102002##k，他會告訴你#b增強騎寵騎獸#k的事情。 ");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20527).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
