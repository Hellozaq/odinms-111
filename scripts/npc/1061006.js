/*
     名字：奇怪的石像
     地图：奇幻村
     描述：105000000
 */

var map = [910530000, 910530100, 910530200];
var quest = [2052, 2053, 2054];

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
            cm.sendOk("把手放在石像上，也没有任何变化。");
            break;
        case 1:
            for (q = 0; q < quest.length; q++)
                if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[q])).getStatus() == 0) {
                    break;
                }
            if (q == 0) {
                cm.dispose();
                return;
            }
            var chat = "它的力量让你沉睡在森林深处。#b";
            var len = Math.min(q, map.length);

            for (var i = 0; i < len; i++)
                chat += "\r\n#L" + i + "##m" + map[i] + "##l";
            cm.sendSimple(chat);
            break;
        case 2:
            cm.getPlayer().changeMap(cm.getMap(map[selection]), cm.getMap(map[selection]).getPortal(0));
            cm.dispose();
    }
}
