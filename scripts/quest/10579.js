/*
     名字：新功能：找尋隊伍
     地图：104000000
     描述：維多利亞港
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
            qm.sendNext("你有知道嗎？隨著楓之谷活動的日益增多，為了讓大家都能夠更方便的參與各項內容，最近有推出新的功能呢。");
            break;
        case 1:
            qm.sendPrev("嘗試著點擊「o」鍵，你會發現找尋隊伍的功能變得更加實用，可以幫助您搜索朋友、隊員或探險隊哦！！");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(10579).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.sendPartyWindow();
            qm.dispose();
    }
}
