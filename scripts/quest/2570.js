/*
     名字：轉職成重砲指揮官
     地图：航海室
     描述：120000101
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 5) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2570)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2570).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("見到你很高興，聽說你幫助斯托納回到了這裡，看你好像受了很重的傷，這麼快就好了嗎？身體很結實哦……現在我理解斯托納為什麼對你那麼感興趣了。我叫卡伊琳，是鯨魚號的船長，同時也是海盜的轉職教官。");
            break;
        case 1:
            qm.sendNextPrev("斯托納想讓你成為砲手，你應該已經聽說了吧？我也非常歡迎你這樣的人才加入我們海盜。但是我擔心你願不願意成為海盜。我得先給你講講海盜的故事。");
            break;
        case 2:
            qm.sendNextPrev("為了對很久以前威脅整個楓之谷世界的黑魔法師進行調查，我組建了海盜團。鯨魚號的海盜們現在正在楓之谷世界的各個地方調查黑魔法師的痕跡。");
            break;
        case 3:
            qm.sendNextPrev("如果你能成為海盜，就必須幫助我們調查黑魔法師。當然，這不是義務，只是我的建議。我是海盜們的轉職教官，不是海盜們的主人。因此不是命令，只是建議。");
            break;
        case 4:
            qm.sendNextPrev("你也是想在楓之谷冒險的人，相信你一定願意幫助我們。不是為了獎勵，而是出於善意……呵呵。");
            break;
        case 5:
            qm.sendYesNo("我好像扯得太遠了……你現在就決定吧。你想成為海盜嗎？如果你能成為砲手，我會很高興的。");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(2570).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(2945).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.getPlayer().changeJob(501);
            qm.resetStats(4, 4, 4, 4);
            qm.gainItem(1532000, 1);
            qm.sendNext("好了，現在你已經是海盜的一員，擁有屬於砲手的專屬技能，你可以打開技能窗看一看。我給了你一些SP，你可以用來提升技能。隨著等級的升高，你可以使用更多的技能。");
            break;
        case 7:
            qm.sendNext("但是，光是靠技能還不行，請你打開角色屬性窗，按照砲手的需要對自己的能力值進行分配。砲手必須拿著沉重的加農砲，因此必須以力量為中心。如果不知道能力值該怎麼分配的話，請使用#b自動分配#k。");
            break;
        case 8:
            qm.sendNextPrev("啊，還有一件事不能忘記。你成為了海盜，在戰鬥的時候必須注意管理體力。死亡的話，之前積累的經驗值會受到損失。好不容易獲得的經驗值，如果損失的話，豈不是太可惜了。");
            break;
        case 9:
            qm.sendPrev("好了！我能教你的就是這些。我給了你一件適合你使用的武器，你去一邊旅行，一邊鍛煉自己吧。如果遇到了黑魔法師的部下，一定要除掉他們！明白了嗎？");
            break;
        case 10:
            qm.dispose();
    }
}
