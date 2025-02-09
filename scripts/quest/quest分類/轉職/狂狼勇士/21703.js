/*
     名字：只有修煉才能生存下去！3
     地图：瑞恩修練場入口
     描述：140010100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 6) {
                qm.sendOk("修煉這種東西需要意志和實力，超越您的老師是非常驚人的，但你不能讓你自己墜落下去，你必須不斷的修煉才能獲得強大的力量，同時找回失去的記憶。");
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
            qm.sendNext("現在你的能力是什麼程度，我大概瞭解了……呵呵……沒想到我這把老骨頭還能有今天……真是感動得要流眼淚……不，是鼻涕……");
            break;
        case 1:
            qm.sendNextPrevS("……也沒怎麼修煉嘛……");
            break;
        case 2:
            qm.sendNextPrev("好，現在讓我們開始第3階段的最後一階段的鍛煉。這次修煉的對象是……#r#o9300343##k！肥肥！你瞭解它們嗎？");
            break;
        case 3:
            qm.sendNextPrevS("不瞭解……");
            break;
        case 4:
            qm.sendNextPrev("修煉用肥肥是天生的戰士！從出生的那一刻起，對食物就充滿了無窮的憤怒，凡是它們經過的地方都不會留下任何食物。很可怕吧？");
            break;
        case 5:
            qm.sendNextPrevS("他不是在開玩笑吧？");
            break;
        case 6:
            qm.sendAcceptDecline("來！！！快點再次進入修煉場，去和那些天生的戰士們——修煉用的肥肥戰鬥吧，打倒30隻後，你的能力將會有一個質的飛躍。全力以赴地去戰鬥吧！超越我這個老師！");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(21703).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 3) {
                qm.sendOk("你捨不得離開老師？嗅嗅聞聞....我太感動了，但你不能到此為止！");
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
            qm.sendNext("這麼快就打倒了30隻修煉用肥肥……我這老頭子果然沒有看錯。雖然你失去了曾經的記憶，失去了曾經的能力，但你仍然是個英雄！只要手上的長矛還在！");
            break;
        case 1:
            qm.sendNextPrevS("這麼說是為了安慰我嗎？");
            break;
        case 2:
            qm.sendNextPrev("我已經沒什麼可繼續教你的了。你已經超越了我這個老頭子。你可以下山了……唉，沒什麼好憂鬱的。我這老頭子能夠有機會指導你，已經很滿足了。");
            break;
        case 3:
            qm.sendAcceptDecline("現在你回去找#b#p1201000##k吧。她看到你的進步會很高興的！");
            break;
        case 4:
            qm.sendPrevS("我想起了技能矛之鬥氣！我還想跟著有點癡呆的老頭子訓練有沒有效果呢，沒想到真的有效！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21000000# #q21000000# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 700 exp", 3);
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(21703).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(21000000), qm.getPlayer().getSkillLevel(21000000), 10, -1);
            qm.gainExp(700);
            qm.dispose();
    }
}
