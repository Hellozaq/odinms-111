/*
     名字：閃雷悍將的騎士等級試煉
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function end(mode, type, selection) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20205)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(20205).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("試煉的象徵全部帶來啦……都帶來了？嘻嘻嘻！我就知道你一定能行。我確認你具備了成為正式騎士的資格！哈哈，你想成為正式騎士嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20205).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(1510);
            qm.removeAll(4032100);
            qm.sendNext("現在你已不再是修煉騎士，你已經成為了皇家騎士團的正式騎士。");
            break;
        case 2:
            qm.sendNext("我給了你一些SP，你現在可以學習閃雷悍將技能中只有正式騎士才能學習的技能了。這些和閃電結合的強大技能，希望你好好使用。");
            break;
        case 3:
            qm.sendPrev("別把成為正式騎士的事情看得太重，不管多艱難的事情，也得懂得尋找樂趣。");
            break;
        case 4:
            qm.dispose();
    }
}
