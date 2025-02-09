/*
     名字：穆斯
     地图：森林岔道
     描述：240010400
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(6180)).getStatus() != 1) {
        cm.sendOk("你想學習盾牌的技巧嗎，如果你符合條件的話，可以在我這裡進行訓練。");
        cm.dispose();
        return;
    }
    cm.getPlayer().changeMap(cm.getMap(924000000), cm.getMap(924000000).getPortal(0));
    cm.dispose();
}
