/*
     名字：杜亞特
     地图：金字塔山丘
     描述：926010000
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
            if (cm.getPlayer().getMap().getId() > 926020000 && cm.getPlayer().getMap().getId() < 926020005) {
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001321 + (cm.getPlayer().getMap().getId() % 10), 1);
                cm.getPlayer().changeMap(cm.getMap(926010000), cm.getMap(926010000).getPortal(1));
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMap().getId() > 926010000 && cm.getPlayer().getMap().getId() < 926010005) {
                cm.getPlayer().changeMap(cm.getMap(926010000), cm.getMap(926010000).getPortal(1));
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMap().getId() > 926010000 && cm.getPlayer().getMap().getId() < 926013505) {
                cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
            }
            if (cm.getPlayer().getMap().getId() == 926010000) {
                var chat = "#e<組隊任務：奈特的金字塔>#n\r\n\r\n在耶提法老的墳墓裏，想要生存，就必須用盡一切可能，消滅掉那些威脅你的怪物，最終解開寶藏的秘密。然而想要輕易拿走奈特的寶藏，它是絕對不允許這種事發生的。\r\n\r\n－#eParty Members#n：2 \r\n－#elevel#n：40 - 200#b";
                chat += "\r\n#L0#進入金字塔";
                chat += "\r\n#L1#雪人法老墓";
                chat += "\r\n#L2#兌換<法老護衛者>勳章";
                cm.sendSimple(chat);
            }
            break;
        case 1:
            if (cm.getPlayer().getMap().getId() > 926010000 && cm.getPlayer().getMap().getId() < 926013505) {
                cm.getPlayer().changeMap(cm.getMap(926010000), cm.getMap(926010000).getPortal(1));
                cm.dispose();
                return;
            }
            if (selection == 0) {
                var chat = "金字塔根據不同玩家的等級，劃分為三個區域：\r\n#b";
                //chat += "#L0##v3994115#";
                chat += "#L1##v3994116#";
                chat += "#L2##v3994117#";
                chat += "#L3##v3994118#";
                cm.sendSimple(chat);
            }
            if (selection == 1) {
                status = 2;
                var chat = "咳！咳！雪人法老墓，蘊藏著無限的寶藏，只要你攜帶了相應寶石我就讓你進去：#b";
                chat += "\r\n#L0##v4001322##t4001322#";
                chat += "\r\n#L1##v4001323##t4001323#";
                chat += "\r\n#L2##v4001324##t4001324#";
                chat += "\r\n#L3##v4001325##t4001325#";
                cm.sendSimple(chat);
            }
            if (selection == 2) {
                var record = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(7760));
                var data = record.getCustomData();
                if (data == null) {
                    record.setCustomData(0);
                    data = record.getCustomData();
                }
                var mons = parseInt(data);
                if (mons < 50000) {
                    cm.sendOk("請打敗金字塔裏至少五萬個怪物. Kills : " + mons);
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().itemQuantity(1142142) || cm.getPlayer().hasEquipped(1142142)) {
                    cm.sendOk("哦！可愛的冒險家！你已經有一塊<法老護衛者>勳章了。");
                    cm.dispose();
                    return;
                }
                cm.gainItem(1142142, 1);
                record.setCustomData(0)
                cm.dispose();
            }
            break;
        case 2:
            if (cm.getPlayer().getParty() == null) {
                cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("很抱歉，進入此區域，需要由組長帶隊。");
                cm.dispose();
                return;
            }
            var chat = "很抱歉，因為你的小组规模不在入场要求範圍大小內，一些组員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2 \r\nLevel range: " + (selection < 1 ? "40~45" : selection < 2 ? "45~50" : selection < 3 ? "50~60" : "60+") + "\r\n\r\n";
            var chenhui = 0;
            var party = cm.getParty().getMembers();
            for (var i = 0; i < party.size(); i++)
                if ((selection == 0 ? (party.get(i).getLevel() < 40 || party.get(i).getLevel() > 45) : selection == 1 ? (party.get(i).getLevel() < 45 || party.get(i).getLevel() > 50) : selection == 2 ? (party.get(i).getLevel() < 50 || party.get(i).getLevel() > 60) : party.get(i).getLevel() < 60) || party.get(i).getMapid() != 926010000 || party.size() != 2) {
                    chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "##k\r\n";
                    chenhui++;
                }
            if (chenhui != 0) {
                cm.sendOk(chat);
                cm.dispose();
                return;
            }
            if (cm.start_PyramidSubway(selection)) {
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "金字塔目前擁擠，請稍後再試"));
            cm.dispose();
            break;
        case 3:
            if (!cm.getPlayer().itemQuantity(4001322 + selection)) {
                cm.sendOk("很抱歉！由於沒有拿到相應寶石，無法打開墓地的門。");
                cm.dispose();
                return;
            }
            if (cm.bonus_PyramidSubway(selection)) {
                cm.gainItem(4001322 + selection, -1);
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "金字塔目前擁擠，請稍後再試"));
            cm.dispose();
    }
}
