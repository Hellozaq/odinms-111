/*
     名字：亞凱斯特
     地图：冰原雪域市集
     描述：211000100
 */

var item = [[2050003, 300], [2050004, 400], [4006000, 5000], [4006001, 5000]];

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
            if (status < 3) {
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
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3035)).getStatus() < 2) {
                cm.sendOk("旅行者，如果你願意幫助我，我會為你提供一些商品服務。");
                cm.dispose();
                return;
            }
            var chat = "旅行者，非常感謝你的幫助，將古代之書完整的帶來回給我，讓我達成了多年前的心願，作為曾經的煉金士，為了表示對你的感謝，我將會把一些稀有物品賣給你。#b";
            for (var i = 0; i < item.length; i++)
                chat += "\r\n#L" + i + "##v" + item[i][0] + "#(價格:" + item[i][1] + "楓幣)#l";
            cm.sendSimple(chat);
            break;
        case 1:
            item = item[selection];
            cm.sendGetNumber("你想要#b#t" + item[0] + "##k？單價" + item[1] + "楓幣一個，你想購買多少？", 1, 1, 100);
            break;
        case 2:
            cm.sendYesNo("你要買#b" + selection + "#k個#b#t" + item[0] + "##k？總價是#b" + (item[1] * selection) + "#k楓幣。");
            select = selection;
            break;
        case 3:
            if (cm.getPlayer().getMeso() < item[1] * select) {
                cm.sendOk("你是不是缺楓幣？你至少需要有#b" + (item[1] * select) + "#k楓幣。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainMeso(-item[1] * select);
            cm.gainItem(item[0], select);
            cm.sendOk("如果你還有需要，請來這裡找我，雖然我已經退休，但是基礎的魔法物品我還是能夠提供給你的。");
            cm.dispose();
    }
}
