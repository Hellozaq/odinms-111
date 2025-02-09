/*
     名字：史菲魯納
     地图：老婆之屋
     描述：200050001
 */

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
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3034)).getStatus() < 2) {
                cm.sendOk("旅行者，如果你願意幫我的忙，我可以為你製作一些黑暗水晶。");
                cm.dispose();
                return;
            }
            cm.sendYesNo("如果你有足夠多的#z4004004#，我可以幫你製作一些#z4005004#。");
            break;
        case 1:
            cm.sendGetNumber("那麼你想做多少個#z4005004#？", 1, 1, 100);
            break;
        case 2:
            select = selection;
            cm.sendYesNo("如果你想製作" + select + "個#z4005004#，需要提供以下材料\r\n#b#v4004004##t4004004#" + 10 * select + "\r\n#v4031138#" + 500000 * select + "楓幣");
            break;
        case 3:
            if (cm.getPlayer().itemQuantity(4004004) < 10 * select) {
                cm.sendOk("很抱歉，你所提供的材料不能滿足製作要求。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMeso() < 500000 * select) {
                cm.sendOk("很抱歉，請確定一下您有#b" + 500000 * select + "#k楓幣嗎？");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(4004004, -10 * select);
            cm.gainMeso(-500000 * select);
            cm.gainItem(4005004, select);
            cm.sendOk("請一定要合理的適用它。");
            cm.dispose();
    }
}
