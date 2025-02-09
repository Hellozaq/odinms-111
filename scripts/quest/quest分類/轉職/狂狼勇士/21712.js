/*
     名字：完成首次情報收集
     地图：弓箭手村
     描述：100000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
                qm.sendOk("還是不瞭解發生了甚麼事情嗎？我很樂意再次說明給你聽。");
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
            qm.sendNext("可疑的菇菇寶貝玩偶...這個娃娃發出奇怪的噪音，你無法用你的耳朵聽見，因為只有菇菇寶貝能聽到奇怪的噪音。我相信就是因為這個原因導致#o1210102#的個性變得兇暴。");
            break;
        case 1:
            qm.sendYesNo("菇菇寶貝因為受到噪音的影響，變成了憤世嫉俗的菇菇寶貝，並且開始攻擊了沒受到噪音影響的菇菇寶貝，導致了所有的菇菇寶貝都在備戰狀態。由此肯定菇菇寶貝改變的原因就是因為這個#b娃娃#k，瞭解了嗎？");
            break;
        case 2:
            qm.sendNextPrev("我發現這是第一次菇菇寶貝發生變異，且沒有原因可以說明這個娃娃是自然產生的，也就是說一切都是有人在#b幕後指使#k的，最近我應該多注意#o1210102#。");
            break;
        case 3:
            qm.sendPrev("你已經找出是甚麼導致了菇菇寶貝的變異，接著回報給#b#p1002104##k所有收集到的情報吧。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(21712).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
