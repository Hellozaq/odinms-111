/*
     名字：國王的義務
     地图：偉大的精神降臨
     描述：910150100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 4) {
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
            qm.sendSimple("……奇怪。在你身上感覺不到國王的力量……那種力量應該不會因為過了數百年而消失啊……到底是怎麼回事？在你身上，只能感受到非常不祥的黑暗氣息……\r\n#L0##b說來話長。#l\n#k");
            break;
        case 1:
            qm.sendSimple("我的肉體已經像塵土一樣消失，只剩下精神。數百上千年的時間，對於我來說就像是流水一樣。我很樂意聽聽你的故事，告訴我這段時間世界上到底發生了什麼事吧。\r\n#L0##b(說明了黑魔法師的存在，再講到和黑魔法師的戰鬥，最後雖然把他封印了起來，但是精靈們卻因此受到了詛咒……把情況一五一十地告訴了她。)#l\n#k");
            break;
        case 2:
            qm.sendSimple("我也許會成為精靈歷史上最愚蠢的國王。要不是我的選擇……要不是我選擇和黑魔法師戰鬥的話，精靈們就不會經歷這麼悲慘的事情……#p1033210#，我願意接受懲罰。\r\n#L0##b發生了這麼多事啊……真讓人吃驚。竟然有覆蓋整個楓之谷世界的強大黑暗力量……竟然影響到了我們精靈，真是悲傷的事情……但是，這不是你的責任。#l\n#k");
            break;
        case 3:
            qm.sendSimple("國王的選擇就是精靈的選擇，不管你做出什麼選擇，都是全體精靈的意志。戰鬥還沒結束，一切都還沒決定。你只要把你的選擇，變成最好的選擇就行……\r\n#L0##b櫻花處理亞……#l\n#k");
            break;
        case 4:
            qm.sendPrev("我知道你為什麼會來找我了。雖然知識還在，但是失去了國王的力量……你沒有必要再通過<國王的試煉>。你是已經擁有資格的人，我允許你擁有國王的力量。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(24011).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
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
            qm.sendNext("在妖精漫長的歷史中，從來沒有發生過類似的大事件。現在是戰爭時期，精靈們都在默默地戰鬥，精靈的年輕國王啊，請一定把精灵們引向勝利。");
            break;
        case 1:
            qm.sendNextPrev("……在忙碌的戰爭時期，你沒有必要再到這裡來。本來為了學習新技能，必須接受第二次、第三次試煉，但是現在就省略了吧。");
            break;
        case 2:
            qm.sendAcceptDecline("我會直接去找你，只要你能找回原來的能力，可以承受國王的力量，我就去喚醒你的能力……我很期待。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(24011).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(2310);
            qm.dispose();
    }
}
