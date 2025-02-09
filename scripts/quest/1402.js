/*
     名字：想要變成法師的話，請前往魔法森林
     地图：魔法森林圖書館
     描述：101000003
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
            qm.sendNext("你就是麥加說的那個人啊，你好，聽說你對法師之路很感興趣，我可以為你提供一些法師的基礎指導。");
            break;
        case 1:
            qm.sendNextPrev("你對法師有所瞭解嗎？那是以較高的智力為基礎，使用魔法的職業，遠距離和近距離戰鬥都很出色，雖然體力稍微有點虛弱，不過有許多輔助魔法可以克服這一缺點，所以不必太擔心。");
            break;
        case 2:
            qm.sendSimple("你有成為法師的潛質，你想成為法師嗎？\r\n#L0##b我想成為法師#l\r\n#L1#選擇其他職業#l");
            break;
        case 3:
            if (selection == 0) {
                qm.sendPrev("你具有清晰的思路與方向，請來#b魔法森林圖書館#k與我詳談。");
                Packages.server.quest.MapleQuest.getInstance(1402).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
            }
            if (selection == 1) {
                qm.sendSimple("你不喜歡法師之路嗎？很遺憾，但是我尊重你的選擇，那你想走哪條道路呢？\r\n#L1##b劍士#l\r\n#L3#弓箭手#l\r\n#L4#盜賊#l\r\n#L5#海盜#l");
            }
            break;
        case 4:
            qm.sendNext("麥加的推荐信已经转交给#b#p" + (selection < 2 ? 1022000 : selection < 4 ? 1012100 : selection < 5 ? 1052001 : 1090000) + "##k。");
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
            qm.sendYesNo("歡迎來到魔法森林圖書館，你一定可以成為一名好法師，那麼，現在我就幫你轉職。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1402).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(2790).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.getPlayer().changeJob(200);
            qm.resetStats(4, 4, 25, 4);
            qm.gainItem(1372043, 1);
            qm.sendNext("至此，你已經能夠使用各種魔法技能了，我給了你一些#bSP#k，你可以打開技能窗來學習自己想擁有的技能，最好學一些#b攻擊魔法#k哦。");
            break;
        case 2:
            qm.sendNext("但是，僅靠技能還是不行的，能力值也必須調整為符合法師的特性，魔法師的核心屬性為智力，補助屬性為運氣，如果不知道能力值該怎麼分配的話，請使用#b自動分配#k。");
            break;
        case 3:
            qm.sendNextPrev("對了，在你去狩獵場之前，我要給你一句忠告，變成法師之後一旦死亡時，就有可能完全喪失在這期間所累積的經驗值哦，所以在你變強大之前，千萬要小心啊。");
            break;
        case 4:
            qm.sendPrev("我已經把能教你的全部都教給你了，為了你的修煉，我給你了一把短杖，你可要好好使用哦，那就祝你好運吧。");
            break;
        case 5:
            qm.dispose();
    }
}
