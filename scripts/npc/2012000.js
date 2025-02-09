/*
     名字：售票員
     地图：天空之城售票處
     描述：200000100
 */

var map = ["維多利亞", "玩具城", "神木村", "納希綠洲城"];
var ticket = [4031047, 4031074, 4031331, 4031576];
var cost = [5000, 6000, 30000, 6000];

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
            var chat = "您好，我負責銷售每個區域的乘船票，請問您想去那裡？#b";
            for (var i = 0; i < ticket.length; i++)
                chat += "\r\n#L" + i + "#" + map[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            select = selection;
            cm.sendYesNo("您想要購買#b#t" + ticket[select] + "嗎##k，費用為#b" + cost[select] + "#k楓幣。");
            break;
        case 2:
            if (cm.getPlayer().getMeso() < cost[select]) {
                cm.sendOk("很抱歉，請確定一下您有#b" + cost[select] + "#k楓幣嗎？");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(ticket[select], 1);
            cm.gainMeso(-cost[select]);
            cm.sendOk("請拿好船票，您可以通過右邊的通道進入乘船區，祝您旅途愉快。");
            cm.dispose();
    }
}
