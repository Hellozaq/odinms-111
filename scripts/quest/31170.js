/*
     名字：倒地的狂狼勇士
     地图：燃燒的神木村3
     描述：272000300
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 3) {
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
            qm.sendNext("喂，這裡！");
            break;
        case 1:
            qm.sendNextPrevS("#b發生了什麼事？……咦，這是狂狼勇士……？！但怎麼變成了……");
            break;
        case 2:
            qm.sendNextPrev("你認識主人嗎？我看你好像不是這個世界的人……不管怎樣都沒關係，現在只有你能幫助我們。");
            break;
        case 3:
            qm.sendNextPrev("我是巨大的矛——瑪哈，旁邊是我的主人，我和主人一起打敗了黑魔法師，把他永遠地封印了起來，但是黑魔法師在被封印的瞬間，用最後的力量給英雄們下了強大的詛咒，主人囙此失去了意識，倒下了。");
            break;
        case 4:
            qm.sendAcceptDecline("這樣下去的話，他可能永遠都站不起來了，必須儘快把主人帶到安全的地方去才行，但是我也變成了這個樣子，所以希望你能幫幫我。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(31170).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
