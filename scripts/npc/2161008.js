/*
     名字：凡雷恩
     地图：陰鬱的見面室
     描述：921140001
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
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
            cm.sendNext("你…是怎麼知道這條路的？這條路只有王族、我和依菲雅知道的啊…難道你真的見過依菲雅嗎？");
            break;
        case 1:
            cm.sendNextPrevS("我真的見到依菲雅了，而且這次我帶著依菲雅一起來了，你親自和依菲雅說說吧。");
            break;
        case 2:
            cm.sendNextPrev("凡雷恩，你看不見我嗎？你聽不見我說話嗎？", 2161009);
            break;
        case 3:
            cm.sendNextPrev("你在胡說什麼……依菲雅在哪裡啊？你要耍我嗎？");
            break;
        case 4:
            cm.sendNextPrevS("你聽不見依菲雅的聲音嗎？為什麼…？為什麼她的聲音無法傳遞給你？");
            break;
        case 5:
            cm.sendNextPrev("說得好像真的一樣，不…也許你說的是真的，說不定依菲雅真的在這裡，還和我說話，但那又有什麼用呢？我的手已經不再乾淨了…");
            break;
        case 6:
            cm.sendNextPrev("…為什麼要說這麼悲傷的話語…", 2161009);
            break;
        case 7:
            cm.sendNextPrev("啊啊…也許是因為那件事，是因為我把我的靈魂出賣給了黑魔法師…由於我殺了太多的人，才聽不見她的聲音…這就是我所犯下罪孽的代價嗎…");
            break;
        case 8:
            cm.sendNextPrev("認識依菲雅的人啊，請收下這個。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4032839# #t4032839# 1");
            break;
        case 9:
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(4032839, cm.getPlayer().itemQuantity(4032839) ? 0 : 1);
            cm.sendNextPrev("這個吊墜裏裝有很久以前宮廷畫家畫的依菲雅的畫像…我時長看著它回憶依菲雅，但現在，這個已經不適合我了。");
            break;
        case 10:
            cm.sendNextPrev("出賣靈魂以滿足復仇之心…最後什麼都沒有剩下，這樣的我沒有資格回憶她。");
            break;
        case 11:
            cm.sendNextPrev("如果能再回到當時，我會不會再做這樣的決定？想過數萬遍，但還是不知道答案，憤怒和虛無…選擇哪一方，最終也不會有改變。");
            break;
        case 12:
            cm.sendPrev("你還是回去吧，現在我不想打架…");
            break;
        case 13:
            cm.getPlayer().changeMap(cm.getMap(211061001), cm.getMap(211061001).getPortal(1));
            cm.dispose();
    }
}
