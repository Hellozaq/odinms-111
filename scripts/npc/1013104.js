/*
     名字：雞蛋桶
     地图：前院
     描述：100030102
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22007)).getStatus() == 1 && !cm.getPlayer().itemQuantity(4032451)) {
        cm.sendOk("#b你得到了一個雞蛋，把它拿給#p1013101#。");
        cm.gainItem(4032451, 1);
        cm.dispose();
        return;
    }
    cm.sendOk("這是一個裝有雞蛋的桶。");
    cm.dispose();
}
