/*
     名字：情報員
     地图：騎士團第2區域
     描述：271030200
 */

function start() {
    var chat = "附近發現了新的精靈之地。據說在那裏可以得到西格諾斯的庭院鑰匙。#b";
    chat += "\r\n#L0#光之#m271030201#";
    chat += "\r\n#L1#火之#m271030202#";
    chat += "\r\n#L2#風之#m271030203#";
    chat += "\r\n#L3#暗之#m271030204#";
    chat += "\r\n#L4#雷之#m271030205#";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(271030201 + selection), cm.getMap(271030201 + selection).getPortal(1));
    cm.dispose();
}
