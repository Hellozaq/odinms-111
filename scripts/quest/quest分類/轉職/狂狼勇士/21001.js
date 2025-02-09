/*
     名字：請救出小孩2
     地图：死路森林
     描述：914000300
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("不！狂狼勇士拒絕了！");
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
            qm.sendAcceptDecline("...差點被嚇死...快！快點帶我去找#b#p1209000##k大人！");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(21001).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4001271, 1);
            qm.getPlayer().changeMap(qm.getMap(914000300), qm.getMap(914000300).getPortal(0));
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
                qm.sendOk("孩子呢？倘若你救了那個孩子，就快點讓他上來吧！");
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
            qm.sendYesNo("平安無事歸來了！孩子呢？你把那個孩子帶回來了嗎？");
            break;
        case 1:
            qm.sendNext("真是太好了...真是太好了.....");
            break;
        case 2:
            qm.sendNextPrev("對，對了！現在不是談這些事情的時機。黑魔法師的氣息已經慢慢地靠近了！好像已經察覺方舟的位置了！不趕快出發的話，就會被逮個正著！");
            break;
        case 3:
            qm.sendNextPrevS("#b我不會走的，你們立刻出發！");
            break;
        case 4:
            qm.sendNextPrev("狂狼勇士！你也坐上方舟吧！我雖然了解你想火拚到最後一刻的心情...可是已經太遲了！打仗這個任務就交給你的同伴，跟我們一起前往#b維多利亞#k吧！");
            break;
        case 5:
            qm.sendNextPrevS("#b絕對不行！");
            break;
        case 6:
            qm.sendPrevS("赫麗娜，你們先去維多利亞吧！我絕對不會死心的，我們後會有期。我要和同伴們一起去對付黑魔法師！", 3);
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(21001).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(914090010), qm.getMap(914090010).getPortal(0));
            Packages.server.MapleInventoryManipulator.unequip(qm.getPlayer().getClient(), -11, qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNextFreeSlot());
            qm.gainItem(4001271, -1);
            qm.gainItem(1442079, -1);
            qm.dispose();
    }
}
