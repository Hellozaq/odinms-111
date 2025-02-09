/*
     名字：如果想要轉職為弓箭手的話，請前往弓箭手村
     地图：弓箭手培訓中心
     描述：100000201
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
            qm.sendNext("你好，聽說你對弓箭手很感興趣，我是弓箭手轉職官#b#p1012100##k，見到你很高興……");
            break;
        case 1:
            qm.sendNextPrev("你對弓箭手的瞭解有多少呢？弓箭手是使用弓或弩，在遠距離攻擊敵人的職業……雖然移動速度相對較慢，但銳利的箭矢從來不會射偏，每一發都非常具有威脅。");
            break;
        case 2:
            qm.sendSimple("怎麼樣，你想成為弓箭手嗎？\r\n#L0##b我想成為弓箭手#l\r\n#L1#選擇其他職業#l");
            break;
        case 3:
            if (selection == 0) {
                qm.sendPrev("你有自己的目標與追求，我會在弓箭手村的#b弓箭手培訓中心#k等待你的到來。");
                Packages.server.quest.MapleQuest.getInstance(1403).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
            }
            if (selection == 1) {
                qm.sendSimple("你想選擇其他職業啊……雖然不無遺憾，但這是你自己的選擇……那在弓箭手之外，你想選擇哪條道路呢？\r\n#L1##b劍士#l\r\n#L2#法師#l\r\n#L4#盜賊#l\r\n#L5#海盜#l");
            }
            break;
        case 4:
            qm.sendNext("麥加的推荐信已经转交给#b#p" + (selection < 2 ? 1022000 : selection < 3 ? 1032001 : selection < 5 ? 1052001 : 1090000) + "##k，她會聯系你的。");
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
                qm.sendOk("不用在猶豫了，相信這是你最好的選擇。");
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
            qm.sendYesNo("歡迎來到弓箭手培訓中心，能直接見到你，我感到很高興……好的，你準備好現在轉職成為弓箭手了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1403).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(2708).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.getPlayer().changeJob(300);
            qm.resetStats(4, 25, 4, 4);
            qm.gainItem(1452051, 1);
            qm.gainItem(2060000, 500);
            qm.sendNext("現在你已經是弓箭手了，如果你想學習弓箭手的新技能，請打開技能窗，我給了你一些#bSP#k，你可以用它來提升技能。");
            break;
        case 2:
            qm.sendNext("但是，僅靠技能還是不行的，能力值也必須按照弓箭手的需要進行調整，弓箭手的核心屬性是敏捷，輔助屬性是力量。如果不知道內容該怎麼分配的話，請使用#b自動分配#k。");
            break;
        case 3:
            qm.sendNextPrev("還有一點必須強調，成為弓箭手之後，在戰鬥中要注意安全，死了的話，之前積累的經驗值就會受到損失，這一點和初心者時期不同……請不要忘記……");
            break;
        case 4:
            qm.sendPrev("我能教你的就只有這些，我送了你一件弓箭手的武器，請你一邊在各地打獵，一邊鍛煉自己吧。");
            break;
        case 5:
            qm.dispose();
    }
}
