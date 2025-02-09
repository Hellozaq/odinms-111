/*
     名字：作戰3階段：可愛的小鳥
     地图：遺忘的時間之路&amp;lt;1&gt;
     描述：220070000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("哼……看來你好像不是很喜歡動物。這麼可愛的動物……我寧願不吃漢堡，也要給牠們吃。");
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
            qm.sendNext("哇！這個喂過了，這個也喂過了，這個喂過了嗎？啊！第3個還沒喂過！來，快吃吧！唉～都張著嘴巴，我都不知道到底哪個肚子餓了……啊，你來啦？");
            break;
        case 1:
            qm.sendNextPrev("唉……太忙了。不久前我聽研究員們說，咕咕鐘是受到了拉圖斯的支配才會變成那樣的。只要好好馴養，牠們就會變成可愛又聽話的鳥。所以趁現在有空，我正在試著飼養牠們。");
            break;
        case 2:
            qm.sendYesNo("不過……一下子養了十隻，讓我覺得很累……食物也很難收集到……雖然我很喜歡牠們。你能幫我養一隻嗎？我送給你。");
            break;
        case 3:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(3250).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7067).forceStart(qm.getPlayer(), qm.getNpc(), 0);
            qm.gainItem(4220046, qm.getPlayer().itemQuantity(4220046) ? 0 : 1);
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
            qm.sendNext("小鳥這麼快就長大了，看來你有好好照顧牠哦。好了，小鳥交給我吧。");
            break;
        case 1:
            qm.sendPrev("牠們本來都不屬於這裡，我會將它們送回到原來的世界。辛苦你了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100000 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(3250).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4220046, -1);
            qm.gainExp(100000);
            qm.dispose();
    }
}
