/*
     名字：似曾相識的女子
     地图：陰森森林
     描述：922220000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3647)).getCustomData() > 0) {
        cm.sendOk("不理你了，一點都不好玩。");
        cm.dispose();
        return;
    }
    if (!cm.getPlayer().itemQuantity(4031793)) {
        cm.sendOk("嘿......你...能幫我找找遗失在森林裡的#b#v4031793##t4031793##k嗎？我現在急需使用它。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("嘿......你...能幫我找找遗失在森林裡的#b#v4031793##t4031793##k嗎？我現在急需使用它......你找到了，能給我嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.sendOk("謝謝，這是你從我這裡拿走的獎勵，會對你有幫助的。");
        cm.gainItem(4031793, -1);
        cm.getPlayer().setFame(cm.getPlayer().getFame() - 5);
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3647)).setCustomData(1);
    }
    cm.dispose();
}
