var cost = 5000;

function start() {
    map = cm.getPlayer().getMap().getId();
    item = (4031711 + parseInt(map / 300000000));
    cm.sendYesNo(map == 103020000 || map == 600010001 ? "开往#b" + (map == 103020000 ? "新叶城" : "金银岛") + "#k的地铁是每10分钟会有一班出发，票价为#b" + cost + "#k金\r\n币，您确定要购买#b#t" + item + "##k吗？" : "你想在地铁开动前离开吗？不会退款。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (map == 103020000 || map == 600010001) {
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "你的背包已满。"));
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < cost) {
                cm.sendOk("很抱歉，请确认你有#b" + cost + "#k金币吗？");
                cm.dispose();
                return;
            }
            cm.gainMeso(-cost);
            cm.gainItem(item, 1);
            cm.sendOk("购买成功。");
            cm.dispose();
            return;
        }
        cm.getPlayer().changeMap(cm.getMap(map == 600010002 ? 600010001 : 103020000), cm.getMap(map == 600010002 ? 600010001 : 103020000).getPortal(0));
    }
    cm.dispose();
}
