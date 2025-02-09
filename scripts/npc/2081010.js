/*
     名字：穆斯
     地图：前往修煉場的路
     描述：924000000
 */

function start() {
    cm.sendSimple("注意：從進入訓練場開始直至結束都必須裝備盾牌，否則你需要重新開始。" + (cm.getPlayer().getMap().getId() == 924000000 ? "\r\n#L0##b領取#t1092041##l\r\n#L1#進入#m924000000#l\r\n#L2#離開這裡#l" : "\r\n#L2##b離開這裡#l"));
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            if (cm.getPlayer().itemQuantity(1092041) || cm.getPlayer().hasEquipped(1092041)) {
                cm.sendOk("你已經領取過#t1092041#了。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(1092041, 1);
            break;
        case 1:
            if (cm.getPlayer().hasEquipped(1092041)) {
                if (cm.getMap(924000001).getCharacters().size() < 1) {
                    cm.getMap(924000001).resetFully();
                    cm.getPlayer().changeMap(cm.getMap(924000001), cm.getMap(924000001).getPortal(0));
                    cm.getPlayer().startMapTimeLimitTask(1200, cm.getMap(924000000));
                    cm.dispose();
                    return;
                }
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "穆斯的修煉場目前擁擠，請稍後再試"));
                cm.dispose();
                return;
            }
            cm.sendOk("請裝備技能學習用盾牌直至練場結束，否則你需要重新開始。");
            break;
        case 2:
            map = cm.getPlayer().getMap().getId() == 924000001 ? 924000000 : 240010400;
            cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
    }
    cm.dispose();
}
