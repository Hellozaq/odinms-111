/*
     名字：惡魔能量的覺醒
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 3) {
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
            qm.sendSimple("#h0#。修煉還順利嗎？\r\n#L0##b#p2151009#。我正想要跟你說話呢。#l");
            break;
        case 1:
            qm.sendSimple("(啊！#h0#找我！？) 什麼？有什麼事嗎？？\r\n#L0##b上次和你進行的修煉想要再來一次。#l");
            break;
        case 2:
            qm.sendSimple("上次的修煉？嗯！看來你是又撞壁了吧。但是以現在的水準，那個修煉應該不會有幫助。\r\n#L0##b沒辦法了。瞭解。#l");
            break;
        case 3:
            qm.sendNextPrev("等等…請等一下。這樣就馬上回去了嗎…讓我告訴你之前我想到的不錯的修煉方法。其實對你的修煉最好的幫助就是和過去的自己戰鬥一場。所以我想到的方法，就是回到過去與過去的你廝殺一場如何呢。");
            break;
        case 4:
            qm.sendNextPrev("要想讓時間倒轉，必須到時間神殿去。但是，對現在的你來說太危險了。因此我找到了一個地方，聽說玩具城的時間流動有點異常。");
            break;
        case 5:
            qm.sendPrev("在玩具城鐘塔的最下層……有個名叫時間通道的地方，在那裡可以進入時間縫隙。你到那裡去，我會為你打開時間縫隙。");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(23219).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
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
            qm.sendNext("#h0#！！狀況怎麼樣？");
            break;
        case 1:
            qm.sendNextPrev("和過去的自己戰鬥，是非常困難的事情。經過這次戰鬥之後，應該會想起過去忘記了的技能。");
            break;
        case 2:
            qm.sendYesNo("終於成功了，我感覺到了和全盛時期的你差不多的氣息。需要進行刻印，防止你忘記嗎？");
            break;
        case 3:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 2) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(23219).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142344, 1);
            qm.gainItem(1322127, 1);
            qm.getPlayer().changeJob(3112);
            qm.sendOk("現在你已經差不多恢復了過去的力量。接下來，就要靠你自己修煉了。我也想儘快恢復原來的樣子。");
            qm.dispose();
    }
}
