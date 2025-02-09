/*
     名字：裝有道具的箱子
     地图：開始之森林5
     描述：130030004
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
                qm.sendOk("如果需要就回來找我。");
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
            qm.sendNext("#b(*噹噹........噹.....*)#k");
            break;
        case 1:
            qm.sendNextPrev("嘿！你嚇到我了！我不知道我有一個訪客。歡迎！我是#b#p1102007##k，我的興趣是製作#b椅子#k，你想要一個椅子作為見面禮物嗎？");
            break;
        case 2:
            qm.sendAcceptDecline("別急，禮物還沒有準備好，因為我沒有找到的材料，你能幫幫我嗎？在這個區域附近，你會發現很多#b箱子#k，裡面也許會#b裝有我需要的材料#k。");
            break;
        case 3:
            qm.sendPrev("如果你不知道如何打破箱子，請使用你的#b普通攻擊#k。");
            break;
        case 4:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(9));
            Packages.server.quest.MapleQuest.getInstance(20013).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("太棒了！噢，這些東西就是我想要的#b#t4032267##k和#b#t4032268##k。");
            break;
        case 1:
            qm.sendPrev("來，這是給你的貴族椅子，漂亮吧！呵呵^^椅子在你的道具欄裡，你可以按兩下使用它，或者將它放到快捷鍵上，坐在椅子上能讓你的HP恢復更快，好了，我的課程就到這裡，希望你能過的愉快。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v3010060# #t3010060# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
            break;
        case 2:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(10));
            Packages.server.quest.MapleQuest.getInstance(20013).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4032267, -1);
            qm.gainItem(4032268, -1);
            qm.gainItem(3010060, 1);
            qm.gainExp(95);
            qm.dispose();
    }
}
