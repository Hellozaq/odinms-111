/*
     名字：神秘的傳送點
     地图：櫻花處
     描述：101050000
 */

var map = Array(104020000, 100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000100);

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
            var chat = "想要前往其它村莊嗎，請選擇目的地。#b";
            for (var i = 0; i < map.length; i++)
                chat += "\r\n#L" + i + "##m" + map[i] + "##l";
            cm.sendSimple(chat);
            break;
        case 1:
            cm.sendYesNo("確定要移動到#b#m" + map[selection] + "##k村莊嗎？");
            select = selection;
            break;
        case 2:
            cm.getPlayer().changeMap(cm.getMap(map[select]), cm.getMap(map[select]).getPortal(0));
            cm.dispose();
    }
}
