/*
     名字：奇怪的夢
     地图：客廳
     描述：100030101
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 7) {
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
            qm.sendNext("醒了嗎，#b#h0##k？");
            break;
        case 1:
            qm.sendNextPrevS("嗯…媽媽起得很早哦。");
            break;
        case 2:
            qm.sendNextPrev("嗯……但是你怎麼好像沒睡著呢？是因為昨晚雷聲轟隆隆閃電交加的緣故，是這樣嗎？");
            break;
        case 3:
            qm.sendNextPrevS("不是！不是啦！我昨晚做了一個奇怪的夢。");
            break;
        case 4:
            qm.sendNextPrev("奇怪的夢，你做了什麼夢？");
            break;
        case 5:
            qm.sendNextPrevS("就是啊…");
            break;
        case 6:
            qm.sendNextPrevS("說明瞭在霧中遇見龍的夢。");
            break;
        case 7:
            qm.sendAcceptDecline("呵呵呵呵，龍嗎？真的好厲害，還好沒被抓去吃掉，有趣的夢也可以和#p1013101#分享，應該會很棒。");
            break;
        case 8:
            qm.sendPrev("猶塔拿早餐去給獵犬吃，前往前院了，你從家裡往外走就能看到了。");
            break;
        case 9:
            Packages.server.quest.MapleQuest.getInstance(22000).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/1/0"));
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 0) {
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
            qm.sendSimple("喔！你起床了？眼睛怎麼有黑眼圈哪？你都沒睡嗎？\r\n#L0##b你說你做了奇怪的夢，什麼夢呢？做了龍出現的夢嗎？#l");
            break;
        case 1:
            qm.sendPrev("哇哈哈哈~龍嗎？那很厲害？龍夢耶！可是夢裡面沒有出現一隻狗嗎？哈哈哈哈~\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(22000).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/2/0"));
            qm.gainExp(20);
            qm.dispose();
    }
}
