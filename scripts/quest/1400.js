/*
     名字：五種冒險的方法
     地图：冒險者修練場入口
     描述：1010000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 2) {
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
            qm.sendAcceptDecline("冒險家，你有著良好的水準提升，將來想成為什麼樣的冒險家呢，你想要我幫你#b引薦職業#k嗎？");
            break;
        case 1:
            var chat = "劍士擁有強大的力量，法師能施放華麗的魔法，弓箭手可以遠端制服敵人，盜賊有靈活的操控，海盜具有超變能力哦。#b";
            chat += "\r\n#L1#我想成為劍士";
            chat += "\r\n#L2#我想成為法師";
            chat += "\r\n#L3#我想成為弓箭手";
            chat += "\r\n#L4#我想成為盜賊";
            chat += " \ r \ n # L5 # 我想成為海盜 ";
            qm.sendSimple(chat);
            break;
        case 2:
            if (selection == 1)
                qm.sendNextPrev(" 劍士擁有強大的力量哦，我會把我的推薦信寄給勇士之村的 # b # p1022000 ## k，當你等級到 # b10級 # k的時候，他會聯系你的。 ");
            if (selection == 2)
                qm.sendNextPrev(" 法師能使用華麗的魔法，我會把我的推薦信寄給魔法森林的 # b # p1032001 ## k，當你等級到 # b8級 # k的時候，他會聯系你的。 ");
            if (selection == 3)
                qm.sendNextPrev(" 弓箭手是一個遠攻好手，我會把我的推薦信寄給弓箭手村的 # b # p1012100 ## k，當你等級到 # b10級 # k的時候，她會聯系你的。 ");
            if (selection == 4)
                qm.sendNextPrev(" 盜 ?  \ 具有良好的操控性，我會把我的推薦信寄給墮落城市的 # b # p1052001 ## k，當你等級到 # b10級 # k的時候，他會聯系你的。 ");
            if (selection == 5) {
                qm.sendNextPrev(" 海盜是一個很出色的職業，我會把我的推薦信寄給鯨魚號碼頭的 # b # p1090000 ## k，當你等級到 # b10級 # k的時候，她會聯系你的。 ");
            }
            select = selection;
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(1406).forceStart(qm.getPlayer(), qm.getNpc(), select);
            Packages.server.quest.MapleQuest.getInstance(1400).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
