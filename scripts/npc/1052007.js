var item = [4031036, 4031037, 4031038, 4031711];
var map = [910360000, 910360100, 910360200, 600010004];
var ticketNames = ["工地B1门票", "工地B2门票", "工地B3门票"];

var status;
var section;
var sw;

function start() {
    status = -1;
    sw = cm.getEventManager("Subway");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }

    if (status == 0) {
        var chat = "请选择目的地。#b";
        chat += "#e#b\r\n#L" + (item.length + 1) + "#进入地铁#r（注意：栖息有蝙蝠、幽灵等）#k#l";
        chat += "#e#b\r\n#L" + (item.length + 2) + "#废都塔#l";
        if (cm.haveItem(4031711)) {
            chat += "#n#b\r\n#L" + (item.length - 1) + "#进入等候室#l";
        }
        if (cm.haveItem(4031711)) {
            chat += "#n#b\r\n#L" + item.length + "#进入工地#l";
        } else {
            chat += "#n#b\r\n\r\n#L" + item.length + "#进入工地#l";
        }
        chat += (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1600)).getStatus() > 0 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1602)).getStatus() < 2 ? "\r\n#L" + (item.length + 3) + "#维修中的列车#l" : "");
        cm.sendSimple(chat);
    } else if (status == 1) {
        section = selection;

        if (section == item.length) {
            var hasTicket = false;
            var chat = "这里是检票处。";

            for (var i = 0; i < item.length - 1; i++) {
                if (cm.getPlayer().itemQuantity(item[i]) > 0) {
                    if (!hasTicket) {
                        chat += "请选择你要使用的门票：#b";
                    }
                    chat += "\r\n#L" + i + "#" + ticketNames[i] + "#l";
                    hasTicket = true;
                }
            }

            if (!hasTicket) {
                cm.sendOk("这里是检票处。你没有票不能到里面去。");
                cm.dispose();
            } else {
                cm.sendSimple(chat);
            }
        } else if (section == (item.length + 1)) {
            cm.getPlayer().changeMap(cm.getMap(103020100), cm.getMap(103020100).getPortal(2));
            cm.dispose();
        } else if (section == (item.length + 2)) {
            cm.getPlayer().changeMap(cm.getMap(103020010), cm.getMap(103020010).getPortal(0));
            cm.getPlayer().startMapTimeLimitTask(10, cm.getMap(103020020));
            cm.dispose();
        } else if (section == (item.length + 3)) {
            if (cm.getMap(931050400).getCharacters().size() > 0 || cm.getMap(931050402).getCharacters().size() > 0) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "维修中的列车区域目前拥挤，请稍后再试"));
                cm.dispose();
                return;
            }
            cm.getPlayer().changeMap(cm.getMap(931050400), cm.getMap(931050400).getPortal(1));
            cm.dispose();
        } else if (section == (item.length - 1)) {
            if (cm.getPlayer().itemQuantity(item[section]) <= 0) {
                cm.sendOk("你没有足够的门票。");
                cm.dispose();
                return;
            }
            /*
            if (sw == null) {
                cm.sendNext("事件错误，请稍后再试。");
                cm.dispose();
            } else if (sw.getProperty("entry").equals("true")) {
                cm.sendYesNo("看起来这趟车有足够的空间。请准备好你的票进入候车室，本次旅程会很长，但你会很快到达目的地。");
            } else if (sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
                cm.sendNext("地铁已经出发了，请等候下一趟列车。");
                cm.dispose();
            } else {
                //cm.sendNext("我们将在发车前1分钟开始检票，请耐心等待几分钟，地铁会准时发车，我们会提前1分钟停止检票，请务必准时进入候车室。");
				cm.sendNext("这里是检票处。现在已经停止检票了，出发前5分钟可以进入候车室。");
                cm.dispose();
            }
			*/
			cm.gainItem(item[section], -1); // 移除门票
			cm.getPlayer().changeMap(cm.getMap(600010004), cm.getMap(600010004).getPortal(0)); // 传送到候车室地图
			cm.dispose();
        }
    } else if (status == 2) {
        if (section == (item.length - 1) && sw != null && sw.getProperty("entry").equals("true")) {
			/*
            cm.gainItem(item[section], -1); // 移除门票
            cm.getPlayer().changeMap(cm.getMap(600010004), cm.getMap(600010004).getPortal(0)); // 传送到候车室地图
            cm.dispose();
			*/
        } else if (selection < item.length) {
            if (cm.getPlayer().itemQuantity(item[selection]) <= 0) {
                cm.sendOk("你没有足够的门票。");
                cm.dispose();
                return;
            }

            cm.gainItem(item[selection], -1); // 移除门票
            cm.getPlayer().changeMap(cm.getMap(map[selection]), cm.getMap(map[selection]).getPortal(0)); // 传送到指定地图
            cm.dispose();
        } else {
            cm.dispose();
            return;
        }
    }
}
