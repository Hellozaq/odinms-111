/*
     名字：莫斯卡丹的善意
     地图：發電廠保安隊
     描述：310050100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 2) {
                qm.sendOk("傑特機能停止時也沒感到害怕，是因為他相信你。");
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
            qm.sendSimple("傑特在停止工作之前，把有關你的資訊發送給了我。謝謝你幫助我弟弟。多虧了你，我的弟弟和妹妹全都可以活下去。根據資料，像你這樣的人被稱為好人。\r\n#L0##b你知道會發生這種事情嗎？#l\n#k");
            break;
        case 1:
            qm.sendSimple("我知道總有一天傑利麥勒博士會把拓傑托扔掉。拓傑托是我們之中最適合戰鬥的一個，因此損耗也最高。所以我判斷如果要丟棄的話，拓傑托很可能是第一個。\r\n#L0##b那你為什麼不製作拓傑托的心臟，而是製作傑特的心臟呢？#l\n#k");
            break;
        case 2:
            qm.sendSimple("以我的技術，不能完美地製作出適合拓傑托的心臟。如果我為拓傑托製作心臟，之後拓傑托在參加戰鬥的時候，就會功率不足。傑特不是戰鬥型機器人，使用我製作的心臟應該不會有問題。\r\n#L0##b#p2154003#好像事先做了很多計算。#l\n#k");
            break;
        case 3:
            qm.sendYesNo("但即使是給傑特使用，我製作的心臟的能源效率還是太差了。因此必須先充滿能量才行。請你在交給傑特之前，先在心臟中充滿能量。相信你一定會幫我。");
            break;
        case 4:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(23968).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(23981).forceStart(qm.getPlayer(), qm.getNpc(), 0);
            qm.gainItem(4220179, 1);
            qm.dispose();
    }
}

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
            qm.sendNext("看到了停止運轉的傑特。把新的心臟放進去，按下按鈕，重新開機傑特吧。");
            break;
        case 1:
            qm.sendPrev("能再次見到你，真的非常高興。如果不是你的話，我們的計畫不會成功。拓傑托姐姐雖然表面上不說，但在電路的深處，一定在對你表示感謝。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2050004# #t2050004# 20\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 150000 exp");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(23968).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4220179, -1);
            qm.gainItem(2050004, 20);
            qm.gainExp(150000);
            qm.dispose();
    }
}
