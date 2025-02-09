/*
     名字：如果想要轉職為海盜請前往鯨魚號
     地图：航海室
     描述：120000101
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 4) {
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
            qm.sendNext("嗯，麥加說的果然沒錯，你看上去很有天賦。見到你很高興，我叫卡伊琳，是鯨魚號的船長，同時也是海盜們的轉職官，聽說你對海盜感興趣，是嗎？");
            break;
        case 1:
            qm.sendNextPrev("首先我必須要說明一些情況，為了對抗威脅楓之谷世界的人——黑魔法師，我在不久前組建了海盜團，鯨魚號的海盜們現在正在楓之谷世界各地調查黑魔法師的痕跡。");
            break;
        case 2:
            qm.sendNextPrev("如果你成為海盜的話，就必須幫助調查黑魔法師。當然，這不是義務，而是建議。雖然我是海盜們的轉職官，但不是海盜們的主人，所以不是命令，只是建議。");
            break;
        case 3:
            qm.sendNextPrev("如果你是在楓之谷世界冒險的人，相信你一定願意為楓之谷世界做這些事情。不是出於獎勵，而是出於善意……呵呵。好像扯得太長了。你先記住這些，真正重要的在後面。");
            break;
        case 4:
            qm.sendNextPrev("海盜大致分為使用短槍的人和使用體術的人，各自的技能存在很大的差別。如果說有什麼共同點的話，那就是都有華麗的連續技。雖然操作很難，但熟悉了的話，就會變得很強。");
            break;
        case 5:
            qm.sendSimple("我好像說得太多了……由你決定吧，你想成為海盜嗎？\r\n#L0##b我想成為海盜#l\r\n#b#L1#選擇其他職業#l");
            break;
        case 6:
            if (selection == 0) {
                qm.sendPrev("相信我，你一定會喜歡上這個職業的，我在#b鯨魚號的航海室#k等待著你的到來。");
                Packages.server.quest.MapleQuest.getInstance(1405).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
            }
            if (selection == 1) {
                qm.sendSimple("你想選擇海盜以外的其他道路嗎？這也不壞，那你想選擇什麼職業呢？\r\n#L1##b劍士#l\r\n#L2#法師#l\r\n#L3#弓箭手#l\r\n#L4#盜賊#l");
            }
            break;
        case 7:
            qm.sendNext("麥加的推荐信已经转交给#b#p" + (selection < 2 ? 1022000 : selection < 3 ? 1032001 : selection < 4 ? 1012100 : 1052001) + "##k，她會聯系你的。");
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
                qm.sendOk("你還沒做好心理准備嗎？");
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
            qm.sendYesNo("很高興能在這裡見到你……幹嘛這麼吃驚？我看上去太年輕了嗎？其實我的年紀比看上去要大得多，你可別小看我。好了，準備好轉職成為海盜了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1405).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(2945).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.getPlayer().changeJob(500);
            qm.resetStats(4, 4, 4, 4);
            qm.gainItem(1482000, 1);
            qm.gainItem(1492000, 1);
            qm.gainItem(2330000, 1000);
            qm.sendNext("好了，現在你已經是海盜的一員，擁有屬於海盜的專屬技能，你可以打開技能窗看一看。我給了你一些SP，你可以用來提升技能。隨著等級的升高，你可以使用更多的技能。");
            break;
        case 2:
            qm.sendNext("但是，光是靠技能還不行，請你打開角色屬性窗，按照海盜的需要對自己的能力值進行分配，想成為打手的話，就以力量為中心，想成為槍手的話，就以敏捷為中心，如果不知道能力值該怎麼分配的話，請使用#b自動分配#k。");
            break;
        case 3:
            qm.sendNextPrev("還有一件事必須記住，你已經從初心者成為了海盜，戰鬥時一定要注意體力，死了的話，之前積累的經驗值會受到損失。");
            break;
        case 4:
            qm.sendPrev("好了！我能教你的就只有這些，我給了你幾件適合你使用的武器，希望你一邊旅行，一邊鍛煉自己。如果遇到了黑魔法師的部下，一定要消滅掉他們，明白了嗎？");
            break;
        case 5:
            qm.dispose();
    }
}
