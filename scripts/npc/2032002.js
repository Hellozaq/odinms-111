/* Aura
 *
 * Adobis's Mission I: Unknown Dead Mine (280010000)
 *
 * Zakum PQ NPC (the one and only)
 */

var status = -1;
var selectedType;
var scrolls;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }

    if (status == 0) {
        cm.sendSimple("...#b\r\n#L0#你还想知道什么？#l\r\n#L1#收集好了#t4001018##l\r\n#L2#我想放弃任务#l");
    } else if (status == 1) {
        selectedType = selection;
        if (selection == 0) {
            cm.sendNext("揭示扎昆的力量，你将不得不重新创建它的核心。隐藏在这个地牢的地方是一个#b#t4001018##k是一种制作核心的必要材料\r\n。找到它，并把它带回给我。\r\n哦，你能帮我一个忙吗？也有许多卷轴压在这里的岩石下面。如果你能得到30个，我会给予你奖励。")
            cm.safeDispose();
        } else if (selection == 1) {
            if (!cm.haveItem(4001018)) { //documents
                cm.sendNext("请把#b#t4001018##k带过来。")
                cm.safeDispose();
            } else {
                if (!cm.haveItem(4001015, 30)) { //documents
                    cm.sendYesNo("你确定要把#b#t4001018##k制作成#b#t4031061##k吗？");
                    scrolls = false;
                } else {
                    cm.sendYesNo("你确定要把#b#t4001018##k制作成#b#t4031061##k吗？你也给我带\r\n来了30个卷轴，我会遵守承诺给予你相应的奖励的。");
                    scrolls = true;
                }
            }
        } else if (selection == 2) {
            cm.sendYesNo("你确定要出去吗？如果你是队长你的队伍也会被一起传送出去\r\n的！")
        }
    } else if (status == 2) {
        var eim = cm.getEventInstance();
        if (selectedType == 1) {

            cm.gainItem(4001018, -1);
            if (scrolls) {
                cm.gainItem(4001015, -30);
            }
            //give items/exp
            cm.givePartyItems(4031061, 1);
            if (scrolls) {
                cm.givePartyItems(2030007, 5);
                cm.givePartyExp(20000);
            } else {
                cm.givePartyExp(12000);
            }

            //clear PQ

            if (eim != null) {
                eim.finishPQ();
            }
            cm.dispose();
        } else if (selectedType == 2) {
            if (eim != null) {
                if (cm.isLeader())
                    eim.disbandParty();
                else
                    eim.leftParty(cm.getChar());
            } else {
                cm.warp(280090000, 0);
            }
            cm.dispose();
        }
    }
}
