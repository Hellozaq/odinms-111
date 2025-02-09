/*
     名字：洛哈
     地图：亞泰爾營地
     描述：300000000
 */

var item = 4000437;

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 2) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendSimple("這麼多人受傷，卻沒有足夠的藥材。\r\n#L0##b#給你#v4000437#，你可以用它來製作更多的藥#l");
            break;
        case 1:
            if (cm.getPlayer().itemQuantity(item) < 100) {
                cm.sendNext("非常感謝你的好意，但是你沒有足夠的黑色芽孢...至少需要#b100#k個。");
                cm.dispose();
                return;
            }
            cm.sendGetNumber("捐贈#b100#k個#v" + item + "##t" + item + "#可以得到#b1#k個#v4310000#。(捐贈: " + cm.getPlayer().itemQuantity(item) + ")", Math.min(300, cm.getPlayer().itemQuantity(item) / 100), 1, Math.min(300, cm.getPlayer().itemQuantity(item) / 100));
            break;
        case 2:
            if (selection > 0 && selection <= cm.getPlayer().itemQuantity(item) / 100) {
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(4310000, selection);
                cm.gainItem(item, -(selection * 100));
                cm.sendOk("非常感謝你對亞泰爾營地所作的貢獻。");
            }
            cm.dispose();
    }
}
