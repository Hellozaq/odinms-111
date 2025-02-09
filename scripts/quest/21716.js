/*
     名字：第二個情報收集結束
     地图：魔法森林
     描述：101000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 3) {
                qm.sendOk("你還在猶豫些什麼，那個孩子一定是嫌疑犯，快把這個情況彙報給#b#p1002104##k。");
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
            qm.sendNext("#p1032112#說了些什麼嗎？");
            break;
        case 1:
            qm.sendNextPrevS("我把聽到的內容轉達給了#p1032101#。");
            break;
        case 2:
            qm.sendNextPrev("拿著玩偶的小孩？不得不叫人懷疑。一定是他讓怪物們變得殘暴的。");
            break;
        case 3:
            qm.sendNextPrev("魔法森林地區的和平已經被打破……這種惡行絕對不能饒恕……看來我得提醒村民們最近一定要多加小心。");
            break;
        case 4:
            qm.sendAcceptDecline("怪物們…變得兇暴的原因找到了。現在把收集到的情報告訴#b#p1002104##k吧。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(21716).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
