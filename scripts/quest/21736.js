/*
     名字：調查天空之城
     地图：特魯的情報商店
     描述：104000004
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
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
            qm.sendNext("好久不見了，英雄大人。期間等級升了不少啊？看來努力修煉了啊，勤奮啊，像英雄的出色的表現啊。莉琳是不是很高興？");
            break;
        case 1:
            qm.sendNextPrev("啊，現在不是說這個的時候。情報收集範圍只在維多利亞島覺得不足，為了擴大區域，開始調查了艾納斯大陸。最初是天空之城，沒想到居然找對了。");
            break;
        case 2:
            qm.sendAcceptDecline("艾納斯大陸的天空之城裡發生一些奇怪的事情。跟玩偶不一樣，但氣氛有點怪異好像跟黑色翅膀有關聯。去#b#m200000000##k吧。");
            break;
        case 3:
            qm.sendPrev("到天空之城找到麗莎，向她詢問發生在天空之城的奇怪事情……是怎麼回事就行了。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(21736).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
