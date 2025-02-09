/*
     名字：坤
     地图：維多利亞港
     描述：104000000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22579)).getStatus() < 2) {
        cm.sendOk("想在楓之谷世界旅行，不可疏於修煉。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("你要前往約翰的地圖上的島嗎？沒什麼特殊情況，那地方可不好去，現在就出發嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.getPlayer().changeMap(cm.getMap(200090080), cm.getMap(200090080).getPortal(0));
        cm.getPlayer().startMapTimeLimitTask(30, cm.getMap(914100000));
    }
    cm.dispose();
}
