/*
     名字：瑪哈的請求
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
            qm.sendNext("我想了一下，如果能把主人帶到瑞恩島上，在那裡由純爭寒氣構成的冰川中封印起來，也許可以封鎖詛咒。至少可以讓詛咒不再進一步惡化…");
            break;
        case 1:
            qm.sendNextPrev("問題是現在我的力量變得很弱，沒辦法移動到那裡去。如果不是為了保護主人，和這裡剩下的怪物戰鬥的話……那時為了保護主人，我只能把自己的力量全部釋放出來。");
            break;
        case 2:
            qm.sendAcceptDecline("在附近的怪物身上，應該可以找到含有我的力量的矛碎片。你去消滅怪物，幫我蒐集50個折斷矛的碎片。那樣的話，我就應該可以獲得將主人帶到瑞恩島上去的力量。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(31171).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("折斷矛的碎片全部蒐集到了嗎？");
            break;
        case 1:
            qm.sendNextPrevS("#b在這裡，這樣就夠了嗎？");
            break;
        case 2:
            qm.sendNextPrev("嗯，用這些來恢復力量的話……因該足夠了。");
            break;
        case 3:
            qm.sendNextPrev("呼，雖然沒有全部恢復，但總算有了一些力量，現在我要帶著主人去瑞恩島了。如果還有時間的話，我想見見#b#p1033201##k……希望你能替我向牠問好。");
            break;
        case 4:
            qm.sendNextPrevS("#b#p1033201##k？");
            break;
        case 5:
            qm.sendNextPrev("亞普力耶是歐尼斯龍之王，通過右邊的傳送口，應該就能見到。牠的體型很大，別被嚇著了。熟悉了之後你就會發現，牠其實是個很慈祥的龍。");
            break;
        case 6:
            qm.sendNextPrev("多虧了你，主人終於得救了，別忘了替我向#b#p1033201##k問好。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# " + ((qm.getPlayer().getJob() >= 2110 && qm.getPlayer().getJob() <= 2112) ? "\r\n#s20000194# #q20000194#" : "") + " \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 430000 exp");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(31171).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(31183).forceStart(qm.getPlayer(), qm.getNpc(), 1); //隱藏NPC效果
            if (qm.getPlayer().getJob() >= 2110 && qm.getPlayer().getJob() <= 2112)
                qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(20000194), 1, 1, -1);
            qm.removeAll(4033080);
            qm.gainExp(430000);
            qm.dispose();
    }
}
