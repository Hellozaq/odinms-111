/*
     名字：寵物訓練師羽波
     地图：玩具城寵物散步路
     描述：220000006
 */

function start() {
    if (cm.getPlayer().itemQuantity(4031128)) {
        cm.sendOk("把那封信件和寵物一起，穿越過障礙物爬上去，交給我弟弟#b#p2040033##k。只要轉達信件，肯定會有對寵物好的事情。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("這裡是可以與寵物一同散步的散步路，只是散步，來回走走都可以，如果你還沒有和寵物熟悉起來的話，可能不大聽使喚，怎麼樣？想不想給寵物進行#b訓練#k啊？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.gainItem(4031128, 1);
        cm.sendOk("好的，請收下這封信件，去最頂端找我弟弟#b#p2040033##k，因為直接過去的話，沒有人會知道是我叫你去的........和寵物一起穿越過障礙物，攀升上去之後，並把信件交給他，會有意想不到的好事發生哦。");
    }
    cm.dispose();
}
