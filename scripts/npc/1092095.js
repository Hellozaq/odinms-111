/*
     名字：小乳牛
     地图：鯨魚號牛舍
     描述：912000100
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2905)).getCustomData() > 0) {
        cm.sendOk("吃飽的小乳牛對你不感興趣。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().itemQuantity(4033019) < 3) {
        cm.sendOk("我很饿，我想要吃3捆#v4033019#。");
        cm.dispose();
        return;
    }
    cm.gainItem(4033019, -3);
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2905)).setCustomData(1);
    cm.dispose();
}
