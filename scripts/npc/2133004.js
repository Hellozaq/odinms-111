/*
     名字：小精靈
     地图：森林空地
     描述：930000500
 */

function start() {
    if (!cm.getPlayer().itemQuantity(4001163)) {
        cm.sendOk("我聽艾靈說，你們是過來幫助森林的勇士，森林的水源被怪物詛咒了，我們需要找到這個怪物並且消滅它，請在附近區域搜尋#b#v4001163##t4001163##k，那是可以將怪物引誘出來的寶石。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("哦，你們找到了紫色魔力石，終於有辦法對付那個怪物了，現在就去#b#m930000600##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.warpParty(930000600, 0);
    cm.dispose();
}
