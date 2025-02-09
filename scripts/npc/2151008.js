/*
     名字：怪醫
     地图：秘密廣場
     描述：310010000
 */

var map = 931000500;
var maxp = 1;

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23015)).getStatus() < 1) {
        cm.sendOk("陌生人，不要打攪我！");
        cm.dispose();
        return;
    }
    var chat = "選擇一個你想要去的美洲豹棲息地。#b";
    for (var i = 0; i < 10; i++)
        chat += "\r\n#L" + i + "#Jaguar Room" + i + "(" + cm.getMap(map + i).getCharacters().size() + "/" + maxp + ")#l";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getMap(map + selection).getCharacters().size() < maxp) {
            cm.getPlayer().changeMap(cm.getMap(map + selection), cm.getMap(map + selection).getPortal(1));
            cm.getPlayer().startMapTimeLimitTask(1800, cm.getMap(310010000));
            cm.dispose();
            return;
        }
        cm.sendOk("這個棲息地已經滿人，請稍後再嘗試。");
    }
    cm.dispose();
}
