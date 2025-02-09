/*
     名字：你知道技能嗎？
     地图：開始之森林4
     描述：130030003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("普通攻擊是基本技能，很容易使用。重要的是要記住，使用技巧做真正的#b狩獵#k是很重要的，我建議你重新考慮。");
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
            qm.sendNext("我一直在等待你，我的名字是奇努，之前的課程你已經學會了如何使用普通攻擊。那麼，接下來你會瞭解#b如何使用技能#k，你會發現這對你很有幫助。");
            break;
        case 1:
            qm.sendNextPrev("當你每次升等的時候，你會獲得一些技能點數，請按#b「K」#k鍵打開你的技能欄，可以將獲得的點數分配在你想學習的技能上，拖動技能圖示安放至快速鍵，就能很便捷的使用技能攻擊狩獵怪物。");
            break;
        case 2:
            qm.sendAcceptDecline("地圖周圍有很多的#o100121#，你需要打敗#b3隻#o100121##k，然後給我1個#b#z4000483##k作為證明，可以嗎？我會在這裡等你的。");
            break;
        case 3:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(5));
            Packages.server.quest.MapleQuest.getInstance(20012).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
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
            qm.sendNext("你做得非常好，請記住，每一次升級的時候，請一定要善用技能點數哦。接下來請你繼續往前走，進入下一個授课點。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 55 exp");
            break;
        case 1:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(7));
            Packages.server.quest.MapleQuest.getInstance(20012).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4000483, -1);
            qm.gainExp(55);
            qm.dispose();
    }
}
