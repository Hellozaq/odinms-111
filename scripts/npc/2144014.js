/*
     名字：精靈遊俠
     地图：燃燒的廢墟
     描述：272000310
 */

function start() {
    if (!cm.getPlayer().itemQuantity(4033082)) {
        cm.dispose();
        return;
    }
    cm.sendNext("#b突然開始發光，精靈遊俠的表情好像變好了，這樣就行了嗎？");
    Packages.server.quest.MapleQuest.getInstance(31186).forceStart(cm.getPlayer(), 0, 1);
    cm.gainItem(4033082, -1);
    cm.dispose();
}
