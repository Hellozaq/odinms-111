/*
     名字：西拉斯
     地图：納希站台
     描述：260000100
 */

var cost = 6000;

function start() {
    cm.sendYesNo("你好，我是碼頭的售票員，從這站到#b#m200000000##k需要花費#b" + cost + "#k楓幣，購買#b#z4031045##k才可以乘船。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getMeso() < cost) {
            cm.sendOk("很抱歉，请确定一下您有#b" + cost + "#k楓幣嗎？");
            cm.dispose();
            return;
        }
        cm.gainItem(4031045, 1);
        cm.gainMeso(-cost);
        cm.sendOk("請拿好船票，祝您旅途愉快。");
    }
    cm.dispose();
}
