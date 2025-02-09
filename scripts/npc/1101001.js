/*
     名字：神獸
     地图：耶雷弗
     描述：130000000
 */

function start() {
    if (cm.getPlayer().getJob() > 1000 && cm.getPlayer().getJob() < 2000)
        cm.useItem(2022458);
    cm.sendOk("祝福之光護佑著耶雷弗的騎士，請保護楓之谷的世界。");
    cm.dispose();
}
