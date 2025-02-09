/*
     名字：時空之門
     地图：泰拉森林時空之門
     描述：240070000
 */

var quest = [3718, 3723, 3728, 3735, 3740, 3743];
var map = [240070100, 240070200, 240070300, 240070400, 240070500, 240070600];

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3718)).getStatus() < 2) {
        cm.sendOk("时空之门未启动。");
        cm.dispose();
        return;
    }
    for (limit = 0; limit < quest.length; limit++)
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[limit])).getStatus() < 2) {
            break;
        }
    if (limit < 1) {
        cm.sendOk("在解锁下一张地图之前，请先完成任务。");
        cm.dispose();
        return;
    }
    var chat = "时空之门已启动。";
    var len = Math.min(limit, map.length);
    for (var i = 0; i < len; i++)
        chat += "\r\n#L" + i + "##m" + map[i] + "##l";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(map[selection]), cm.getMap(map[selection]).getPortal(1));
    cm.dispose();
}
