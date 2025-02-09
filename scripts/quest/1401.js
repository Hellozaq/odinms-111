/*
     名字：如果想要轉職為劍士的話，請前往勇士之村
     地图：勇士聖殿
     描述：102000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
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
            qm.sendNext("你就是麥加推薦的那位冒險家嗎？我是劍士的轉職官武術教練，聽說你想轉職成劍士……對嗎？我可以為想要以劍士身份冒險的人提供幫助。");
            break;
        case 1:
            qm.sendNextPrev("你對劍士瞭解多少呢？劍士是以強大的力量和體力為基礎，揮舞近戰武器打倒敵人的職業。是在最接近敵人的地方無畏戰鬥的人，聽起來是不是很有魅力？");
            break;
        case 2:
            qm.sendSimple("你好像充分擁有了成為劍士的資格，像你這樣的冒險家，我隨時表示歡迎！\r\n#L0##b我想成為劍士#l\r\n#L1#選擇其他職業#l");
            break;
        case 3:
            if (selection == 0) {
                qm.sendPrev("我喜歡你的果斷，你一定會成為出色的劍士，請儘快來勇士之村的#b勇士聖殿#k與我詳談。");
                Packages.server.quest.MapleQuest.getInstance(1401).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
            }
            if (selection == 1) {
                qm.sendSimple("你不想走劍士之路嗎？不願意的話，我就不能勉強。除了劍士之外，還有四條道路可供選擇。\r\n#L2##b法師#l\r\n#L3#弓箭手#l\r\n#L4#盜賊#l\r\n#L5#海盜#l");
            }
            break;
        case 4:
            qm.sendNext("麥加的推薦信已經轉交給#b#p" + (selection < 3 ? 1032001 : selection < 4 ? 1012100 : selection < 5 ? 1052001 : 1090000) + "##k，她會聯系你的。");
            Packages.server.quest.MapleQuest.getInstance(1406).forceStart(qm.getPlayer(), qm.getNpc(), selection);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("哎呀……沒想到你這麼膽小，難道你失去成為劍士的自信了嗎？");
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
            qm.sendYesNo("歡迎你來到勇士之村，做好成為劍士的心理准備了嗎？那麼現在讓我來幫你轉職成為劍士，臨陣退縮的人，是不配成為劍士的哦。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1401).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(2849).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.getPlayer().changeJob(100);
            qm.resetStats(25, 4, 4, 4);
            qm.gainItem(1302077, 1);
            qm.sendNext("現在你已經是劍士了，並且也擁有了作為劍士可使用的新技能，請点击#b「K 」#k鍵打開技能窗，第一次升職賦予了一些#bSP#k，你可以用它來提升技能。");
            break;
        case 2:
            qm.sendNext("另外，我已經適當調整了你的能力值，以便更加適合劍士的特點。劍士的核心屬性是力量，輔助屬性是敏捷。如果不知道能力值該怎麼分配的話，請使用#b自動分配#k。");
            break;
        case 3:
            qm.sendNextPrev("對了，有一點需要注意，雖然初心者的時候沒關係，但是成為劍士的瞬間開始，必須小心不要死掉……萬一死了的話，之前積累的經驗值可能會受到損失。");
            break;
        case 4:
            qm.sendPrev("以你現在的能力，暫時能教你的就只有這些，我送了你一件劍士的武器，請你一邊在各地打獵，一邊鍛煉自己。");
            break;
        case 5:
            qm.dispose();
    }
}
