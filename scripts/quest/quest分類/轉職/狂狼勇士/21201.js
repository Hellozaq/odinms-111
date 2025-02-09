/*
     名字：心願之鏡
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 7) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21201)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21201).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("曾經是誰說要讓我成為擊退黑魔法師的傳世武器？結果最後遭到詛咒，數百年來棄我於不顧……什麼？想不起來了？說這種話就想算了嗎？以前為了得到我還苦苦哀求呢….");
            break;
        case 1:
            qm.sendNextPrevS("我想起了當初為了獲得巨大的矛，向大長翁證明自己的能力，請他將矛送給我。");
            break;
        case 2:
            qm.sendNextPrev("沒錯！為了得到我，低三下四地苦苦哀求，就應該好好對待我啊~要知道像我這樣優秀的武器，你上哪裡去找啊？可以和黑魔法師相抗衡的最強的矛，卻被困在冰雪之中數百年…...");
            break;
        case 3:
            qm.sendNextPrevS("你別亂說，我才沒苦苦哀求呢……");
            break;
        case 4:
            qm.sendNextPrev("什麼？沒有苦苦哀求？你當時又哭又鬧，拼命乞求，甚至還跪下來拜託大長翁，還敢說沒有……咦？你難道……已經恢復記憶了嗎？");
            break;
        case 5:
            qm.sendNextPrevS("是…是啊！只有…一點點啦…….");
            break;
        case 6:
            qm.sendNextPrev("…真不愧是狂狼勇士……嗚，嗚嗚！不，我才不會被感動呢！……被黑魔法師詛咒失去了力量，現在連拿起我的力氣都沒有……可是還是把我記起來了！");
            break;
        case 7:
            qm.sendNextPrev("就算失去記憶，也還是我的主人。好吧，即使是在冰雪中沉睡數百年，鍛煉到極端的身體，依然可以記得技能。讓我來喚醒你的能力！");
            break;
        case 8:
            qm.sendAcceptDecline("你的等級跟之前不一樣，無法喚醒所有的能力。可是只要喚醒一些，在這樣的基礎下就可以更快速的升級，恢復從前的能力。");
            break;
        case 9:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(21201).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(2110);
            qm.gainItem(1142130, 1);
            qm.dispose();
    }
}
