/*
     名字：脫皮之後1
     地图：寶貝龍
     描述：寶貝龍
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("主人～你看，我又長大了。");
            break;
        case 1:
            qm.sendNextPrevS("哇，你怎麼這麼大了……啊！聲音都變了。");
            break;
        case 2:
            qm.sendNextPrev("呵呵～是嗎？怎麼樣？很帥吧？");
            break;
        case 3:
            qm.sendNextPrevS("嗯！帥呆了！我之前也發現了，龍每次都會長很多，是因為會蛻皮，所以才會這樣的嗎？");
            break;
        case 4:
            qm.sendNextPrev("嗯，新的鱗片長出來之後，就必須把原來的鱗片全部脫掉。人類的話……身體長大之後，就要做新衣服，就是這種感覺。");
            break;
        case 5:
            qm.sendNextPrevS("好像因為是新長出來的鱗片，看上去非常閃亮。");
            break;
        case 6:
            qm.sendNextPrev("嘿嘿，是嗎？");
            break;
        case 7:
            qm.sendNextPrevS("雖然個頭長大了，但可愛的語氣還是老樣子……");
            break;
        case 8:
            qm.sendNextPrev("但是主人，你看看這個。\r\n#v4032502#\r\n這是我脫下來的一片鱗片，只有它在閃閃發光。其他鱗片全都因為失去了力量而碎裂了，只有這個鱗片好像還保存著我的力量，這個東西應該能用來做什麼吧？");
            break;
        case 9:
            qm.sendNextPrevS("嗯？可以用來幹什麼呢？");
            break;
        case 10:
            qm.sendNextPrev("雖然人類沒有角，沒有鱗片，沒有爪子，也不會噴火，但是人類可以製作有用的東西，不是嗎？用它做資料製作東西，你說好不好？這是我的鱗片，所以非常堅硬。其中還含有我的力量，應該可以使主人的力量變得更強。");
            break;
        case 11:
            qm.sendNextPrevS("哇，好像是的。寶貝龍你真了不起！你什麼時候變得這麼聰明的！");
            break;
        case 12:
            qm.sendNextPrev("嘿嘿，我和你在一起這麼久，對人類已經很瞭解了。這種事情是小意思。");
            break;
        case 13:
            qm.sendPrev("來，主人，這是我的鱗片，以你的力量，一定可以用它製作出很棒的東西。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4032502# #t4032502# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
            break;
        case 14:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(22602).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4032502, 1);
            qm.gainExp(3000);
            qm.dispose();
    }
}
