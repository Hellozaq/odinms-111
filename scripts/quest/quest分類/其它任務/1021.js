/*
     名字：羅傑與蘋果
     地图：嫩寶村
     描述：20000
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
            qm.sendNext("等等！！你是新來的#r冒險家#k嗎？我是羅傑，可以告訴你一些#b有用的知識#k哦。");
            break;
        case 1:
            qm.sendNextPrev("你問我為什麼在這嗎？哈哈哈！我想要#b幫助#k那些剛進楓之谷的#b冒險家#k們。");
            break;
        case 2:
            qm.sendAcceptDecline("所以…..讓我們來玩點#b有趣#k的~！");
            break;
        case 3:
            qm.getPlayer().addHP(qm.getPlayerStat("HP") > 40 ? -25 : 0);
            qm.gainItem(2010007, qm.getPlayer().itemQuantity(2010007) ? 0 : 1);
            qm.sendPrev("#b#v2010007##k可以補充消耗的#bHP#k，按一下鍵盤的#b「 I 」#k鍵，可以打開#b道具欄#k界面，在消耗欄視窗按兩下#b消耗品#k就可以使用。\r\n\r\n我等你把整個#b操作#k做完，會獎勵你#b神秘小禮物#k哦。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(1021).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("UI/tutorial.img/28"));
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
            qm.sendNext("使用#b消耗品#k是不是很簡單呢？你可以把消耗品#r設定#k到#b快速鍵#k上，操作起來會更方便哦。");
            break;
        case 1:
            qm.sendPrev("好了，這就是我目前可以教你的，是時候說再見了，照顧好自己我的朋友！這是我為你準備的#r禮物#k。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2010000# #t2010000# 3 \r\n#v2010009# #t2010009# 3 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(1021).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(2010000, 3);
            qm.gainItem(2010009, 3);
            qm.gainExp(10);
            qm.dispose();
    }
}
