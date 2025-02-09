/*
     名字：被搶走的武陵封印石
     地图：特魯的情報商店
     描述：104000004
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21748)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21748).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("我聽說了，為了調查黑色翅膀的事件，你去了桃花仙境，辛苦了！不過……這次是不是又中了黑色翅膀的招兒？");
            break;
        case 1:
            qm.sendNextPrevS("講述#m250000000#封印石的事情。");
            break;
        case 2:
            qm.sendNextPrev("……什麼？是英雄……過去的你把封印石交給大家的嗎？桃花仙境封印石被搶走了也沒關係，這個情報可意義重大！");
            break;
        case 3:
            qm.sendNextPrevS("意義重大？");
            break;
        case 4:
            qm.sendNextPrev("既然過去封印石是英雄的東西，那麼只要對英雄進行一些調查，哪怕是很瑣碎的一些情報，說不定就能發現封印石的下落了呢？那樣的話，我們就能在黑色翅膀之前，找到封印石了。");
            break;
        case 5:
            qm.sendNextPrevS("原來是這樣，真是個好辦法！");
            break;
        case 6:
            qm.sendNextPrev("呵呵呵…太好了！現在又鬥志昂揚了吧？來，這是新的技能#s21100002# #q21100002#！");
            break;
        case 7:
            qm.sendPrev("看來應該重新調查英雄的行蹤了！特魯會繼續打聽關於黑色翅膀的資訊，你還是專心修煉吧！一定要練到把黑色翅膀鼻子打扁的程度啊。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21100002# #q21100002# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20000 exp");
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(21748).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(21100002), qm.getPlayer().getSkillLevel(21100002), 30, -1);
            qm.gainExp(20000);
            qm.dispose();
    }
}
