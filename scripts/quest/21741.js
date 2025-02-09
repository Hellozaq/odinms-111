/*
     名字：調查武陵
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
            qm.sendNext("等級升多了嗎，英雄大人？發現了與黑色翅膀有關的有趣的情報。這次有點遠…知道叫#b#m250000000##k村莊嗎？得要去哪裡。");
            break;
        case 1:
            qm.sendAcceptDecline("好像在桃花仙境的叫桃醫仙的人跟黑色翅膀接觸了。反正不清楚怎麼會那樣，但是個準確情報。調查為什麼黑色翅膀跟#b#p2090004##k接觸了，有了什麼樣的目的。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(21741).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
