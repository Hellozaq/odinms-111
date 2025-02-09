/*
     名字：如果想要變成盜賊的話，請前往墮落城市
     地图：墮落城市酒吧
     描述：103000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 2) {
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
            qm.sendNext("麥加說的那個人就是你？據她說，你是個很有天賦的小孩……喂！你知道盜賊嗎？");
            break;
        case 1:
            qm.sendNextPrev("有些人覺得盜賊是些偷偷摸摸的小偷，但其實不是這樣的。楓之谷世界的盜賊是在黑暗中用鋒利的短刀和飛鏢戰鬥的人。可能有一點不是那麼堂堂正正，但是這就是盜賊的本質，沒有必要否認。");
            break;
        case 2:
            qm.sendNextPrev("盜賊是可以用快速強力技能攻擊敵人的職業，雖然體力較弱，但因為行動快速，運氣很強，所以可以輕鬆地躲避怪物。");
            break;
        case 3:
            qm.sendSimple("怎麼樣，你想一起踏上盜賊之路嗎？\r\n#L0##b我想成為盜賊#l\r\n#L1#選擇其他職業#l");
            break;
        case 4:
            if (selection == 0) {
                qm.sendPrev("你做了非常明智的決定，請你快來墮落城市的#b墮落城市酒吧#k與我詳談……這是個很隱秘的地方。");
                Packages.server.quest.MapleQuest.getInstance(1404).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
            }
            if (selection == 1) {
                qm.sendSimple("你不喜歡盜賊之路嗎？不喜歡的話，我也不想勉強。那你想選擇什麼職業呢？\r\n#L1##b劍士#l\r\n#L2#法師#l\r\n#L3#弓箭手#l\r\n#L5#海盜#l");
            }
            break;
        case 5:
            qm.sendNext("麥加的推荐信已经转交给#b#p" + (selection < 2 ? 1022000 : selection < 3 ? 1032001 : selection < 4 ? 1012100 : 1090000) + "##k，她會聯系你的。");
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
                qm.sendOk("嗯？還想再考慮一下嗎？");
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
            qm.sendYesNo("歡迎來到墮落城市酒吧，呵呵，好了，做好成為盜賊的準備了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1404).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(2899).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.getPlayer().changeJob(400);
            qm.resetStats(4, 4, 4, 25);
            qm.gainItem(1472061, 1);
            qm.gainItem(1332063, 1);
            qm.gainItem(2070015, 500);
            qm.sendNext("現在你就是盜賊了，你已經可以使用盜賊技能了，打開技能窗看看吧，等級升高之後，能學習更多的技能。");
            break;
        case 2:
            qm.sendNext("但是光是技能還不行的，能力值也必須符合盜賊的需要，才能說是真正的盜賊。盜賊的主要屬性是運氣，輔助屬性是敏捷。如果不知道能力值該怎麼分配的話，請使用#b自動分配#k。");
            break;
        case 3:
            qm.sendNextPrev("我來告訴你一點需要注意的地方，初心者雖然沒關係，但不是初心者的人如果死了，之前積累的經驗值就會受到損失。所以請小心一些，要是辛苦積累到的經驗值受到損失，豈不是很冤枉？");
            break;
        case 4:
            qm.sendPrev("我能教你的只有這些，我給了你一件適合你用的武器，希望你能一邊旅行，一邊修煉。");
            break;
        case 5:
            qm.dispose();
    }
}
