/*
     名字：勇者亞邁斯
     地图：亞邁斯的鍛鍊場所
     描述：670010000
 */

function start() {
    cm.sendSimple("你好，我是#b#p" + cm.getNpc() + "##k，你對我的節目有興趣嗎？\r\n#L0##b進入亞邁斯挑戰#l\r\n#L1#用10把鑰匙換一張票#l");
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            if (cm.getPlayer().itemQuantity(4031592)) {
                cm.getPlayer().changeMap(cm.getMap(670010100), cm.getMap(670010100).getPortal(0));
                cm.gainItem(4031592, -1);
                cm.dispose();
                return;
            }
            cm.sendOk("你必須持有#v4031592##b#t4031592##k我才能讓你進入。");
            break;
        case 1:
            if (cm.getPlayer().itemQuantity(4031593) < 10) {
                cm.sendOk("兌換#v4031592##b#t4031592##k需要10個#v4031593##b#t4031593##k。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(4031592, 1);
            cm.gainItem(4031593, -10);
            cm.sendOk("請拿好你的#v4031592##b#t4031592##k。");
    }
    cm.dispose();
}
