/*
     名字：記得的人
     地图：亞泰爾營地
     描述：300000000
 */

var status = -1;

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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21750)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21750).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("……狂狼勇士……這是我的幻覺嗎？狂狼勇士…你……真的是你嗎？嗚嗚……謝天謝地……");
            break;
        case 1:
            qm.sendNextPrevS("……嗯，不好意思，我不記得你了。");
            break;
        case 2:
            qm.sendNextPrev("……嗯？你說什麼，狂狼勇士？你……不是狂狼勇士嗎？保護我們的英雄，狂狼勇士……那不就是你嗎？");
            break;
        case 3:
            qm.sendNextPrevS("詳細說明有關醒來之後的情況。");
            break;
        case 4:
            qm.sendNextPrev("……原來如此，你失去了記憶，並且在幾百年後的世界醒了過來。這麼說來，這裡對你而言應該是過去的世界……");
            break;
        case 5:
            qm.sendNextPrev("看來我得重新向你介紹了，我的名字是赫麗娜，是你的的朋友赫麗娜。幾個月前，在遇到黑魔法師的攻擊時，曾犧牲你而逃了出來……");
            break;
        case 6:
            qm.sendNextPrev("因為是你阻擋了黑魔法師，所以我們才能搭乘方舟逃到維多利亞島。但是受到了龍的攻擊，沒能到達南部的平原，而是迫降在這森林裡。");
            break;
        case 7:
            qm.sendNextPrev("不過，我們並不能就此放棄……於是先在這裡定居下來。一邊休養生息，一邊準備建造新的村莊。");
            break;
        case 8:
            qm.sendNextPrev("為了開墾荒無人煙的維多利亞島，一起來的青年們全都到村外去了。所以村裡只剩下受傷的人，以及婦女和孩子。");
            break;
        case 9:
            qm.sendPrev("狂狼勇士，你為什麼要到這裡來呢？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20000 exp");
            break;
        case 10:
            Packages.server.quest.MapleQuest.getInstance(21750).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(20000);
            qm.dispose();
    }
}
