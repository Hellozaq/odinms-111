/*
     名字：乳牛
     地图：鯨魚號牛舍
     描述：912000100
 */

function start() {
    if (cm.getPlayer().itemQuantity(4033048)) {
        cm.sendOk("你已經取過牛奶了。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2905)).getCustomData() == 1) {
        cm.gainItem(4033048, 1);
        cm.dispose();
        return;
    }
    cm.sendOk("小乳牛想要吃草。");
    cm.dispose();
}
