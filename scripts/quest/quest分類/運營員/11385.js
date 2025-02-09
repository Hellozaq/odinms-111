/*
     名字：活動映入眼簾
     地图：維多利亞港
     描述：104000000
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
            qm.sendNext("你好，各種活動可以讓你在楓之谷度過快樂的每一天。你在積極參加各種活動嗎？有沒有因為活動內容太豐富而錯過活動的經歷呢？為了讓大家不錯過每一個活動，我想告訴你一個好消息。");
            break;
        case 1:
            qm.sendNextPrev("如果點擊畫面上端的#r[活動]#k按鈕，即可查看名為#b[活動清單]#k的選單。只要點擊該選單，就可以查看所有正在進行的活動了。");
            break;
        case 2:
            qm.sendPrev("你可以看到正在進行什麼活動，活動的開始和結束時間，可以獲得什麼道具等有用的資訊。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(11385).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.sendEventWindow();
            qm.dispose();
    }
}
