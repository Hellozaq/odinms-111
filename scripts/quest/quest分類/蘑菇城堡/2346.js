/*
     名字：危機的菇菇國王
     地图：精靈遊俠
     描述：310010000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 3) {
                qm.dispose();
                return;
            }
            if (status > 5) {
                qm.sendOk("請你一定要幫助我們菇菇王國。");
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
            qm.sendNext("喔喔，你好。你是大名鼎鼎的精靈之王精靈遊俠嗎？");
            break;
        case 1:
            qm.sendNextPrev("真不好意思，這麼突然找你，因為有一件事情要麻煩你，所以想請你幫忙。");
            break;
        case 2:
            qm.sendNextPrev("我們菇菇王國遇到了大危機，啊…你可能還不了解情況，這邊再跟你說明一下。菇菇王國是在弓箭手村附近的菇菇王國，先王得病休息的時候，被叛徒佔領了菇菇王國。");
            break;
        case 3:
            qm.sendNextPrev("想要打敗他們，但是因為跟強壯的雪吉拉也一起聯合，所以我們無能為力。只能向外界請求支援。");
            break;
        case 4:
            qm.sendNextPrevS("(聽你的情況很想要幫忙，但我似乎還沒有恢復力量…不知道能不能完全的幫助。)");
            break;
        case 5:
            qm.sendNextPrev("喔喔，精靈之王真很客氣，如果這樣的話，這次不是精靈之王幫助我們的話，也許很難解決目前的危機。");
            break;
        case 6:
            qm.sendYesNo("菇菇王國的位子是在弓箭手村附近，不過可能不好找，所以直接邀請你過來。");
            break;
        case 7:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            qm.dispose();
            Packages.server.quest.MapleQuest.getInstance(2346).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4032375, qm.getPlayer().itemQuantity(4032375) ? 0 : 1);
            qm.getPlayer().changeMap(qm.getMap(106020001), qm.getMap(106020001).getPortal(0));
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
            qm.sendNext("嗯？#v4032375#！！！什麼，你是…樹木大臣推薦你來的？");
            break;
        case 1:
            qm.sendNextPrevS("是…這樣啊。");
            break;
        case 2:
            qm.sendPrev("嗯……我瞭解了，既然轉職教官都認可了，那一定就是勇士了。很抱歉我沒有自我介紹，我是菇菇王國的警衛隊長，正如你所看到的，這裡是我們暫時的藏身之地，我們的情況很糟糕，儘管如此，#b歡迎你來到菇菇王國#k。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(2346).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(2311).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.gainItem(4032375, -1);
            qm.gainExp(500);
            qm.dispose();
    }
}
