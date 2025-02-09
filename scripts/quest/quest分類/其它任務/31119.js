/*
     名字：發生變化的樹叢
     地图：變形的提魯森林
     描述：271000200
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31119)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(31119).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你有些面生啊？什麼，你認識我？你說曾經看見我一個人蹲在魔法森林裏玩耍？（……難道認識我？）哼哼，你覺得我會做出那麼傻的事情嗎？果然像你的愚蠢的外表一樣，只會說些無聊的話。");
            break;
        case 1:
            qm.sendNextPrev("啊！你就是阿勒斯說的那個人啊。好像也沒什麼本事的樣子。下次你再來找我，我說不定有事要讓你做。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(31119).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(50000);
            qm.dispose();
    }
}
