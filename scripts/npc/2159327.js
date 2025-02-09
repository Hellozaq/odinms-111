/*
     名字：普蘭西斯的日記本
     地图：普蘭西斯的房間
     描述：931050220
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
            if (status == 1) {
                cm.dispose();
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
            if (cm.getPlayer().itemQuantity(4350003)) {
                cm.dispose();
                return;
            }
            cm.sendNext("乾淨的日記本，上面寫著“天才傀儡師普蘭西斯的日記本，絕對不要偷看”的字樣。");
            break;
        case 1:
            cm.sendYesNo("#b黑色翅膀幹部的日記本，要看看嗎？");
            break;
        case 2:
            cm.sendNextPrevS("#b雖然是其他人的日記本，但是說不定有什麼重要的情報，應該看一看，黑色翅膀的幹部……原諒我。");
            break;
        case 3:
            cm.sendNextPrev("今天在走廊裏和兔子撞了一下，竟敢衝撞我！以我的魔力，稍微抬一抬手，他就會變成齏粉，但我要是暴走的話，世界就會滅亡。");
            break;
        case 4:
            cm.sendNextPrevS("#b(感覺手脚冰涼，光是看著這些字，感覺就有某種詛咒效果……黑色翅膀果然不是普通的組織。)");
            break;
        case 5:
            cm.sendNextPrevS("#b(鎮靜下來，看看下一頁吧。)");
            break;
        case 6:
            cm.sendNextPrev("看到那位可愛的大人，今天又充滿了力量，要是那位大人想要，就算是天上的傀儡，我也會摘下來給她……\r\n\r\n#b(什麼東西掉了下來)");
            break;
        case 7:
            cm.sendPrevS("(#v4350003#這是什麼……看上去好像是照片。）", 3);
            break;
        case 8:
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/UIWindow2.img/Picture/3/0"));
            cm.gainItem(4350003, 1);
            cm.dispose();
    }
}
