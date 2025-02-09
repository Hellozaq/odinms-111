/*
     名字：如何找到朋友
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
            qm.sendNext("如果你想更好的體驗楓之谷，不妨找幾位可以一起練級的朋友。打開好友功能表「R」鍵，添加好友，輸入朋友的名字，即可添加。");
            break;
        case 1:
            qm.sendPrev("添加成為好友之後，可以直接在好友功能表內，進行聊天邀請，組隊邀請，還可以結伴參與各種楓之谷的活動，這是一件非常方便有趣的事哦~~。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(28433).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
