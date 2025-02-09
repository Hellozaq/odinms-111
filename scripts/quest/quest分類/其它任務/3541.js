/*
     名字：尋找遺失的記憶
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("好久不見……我聽說你離開埃德爾斯坦之後，變得更強大了……來這裡有什麼事嗎？");
            break;
        case 1:
            qm.sendNextPrev("回憶？是說我們的回憶嗎？雖然有很多同村出身的人，但最重要的是，我想起了你第一次來末日反抗軍本部，說要成為反抗軍的樣子。 那時候你還只是個新手……不知不覺間變得這麼強大，時間過得真快。");
            break;
        case 2:
            qm.sendNextPrev("現在我們好像還不是談論回憶的時候。因為我們的戰鬥還沒有結束。你也要好好加油哦。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3541).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
