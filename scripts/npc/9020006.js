/*
     名字：被關在城內的冒險家
     地图：教官的房間
     描述：921160700
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("英雄大人，我被它囚禁在這裏，請先消滅教官阿尼！才可以安全地逃出去。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("沒想到我還會有機會活著從這個監獄走出去，很感謝你的幫助，請收下這份值得紀念的禮物。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4001534# #t4001534# 1");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.gainNX(2000);
        cm.gainItem(4001534, 1);
        cm.getPlayer().changeMap(cm.getMap(921160000), cm.getMap(921160000).getPortal(0));
    }
    cm.dispose();
}
