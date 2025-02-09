/*
     名字：可疑的入口
     地图：危險的狸貓巢穴
     描述：310050520
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23970)).getStatus() == 1 && cm.getPlayer().getPosition().x < 225) {
        cm.sendOk("#v3800091#石頭中間裡好像關著一個小小的生物。雖然試圖進去，但門關著。");
        Packages.server.quest.MapleQuest.getInstance(23982).forceStart(cm.getPlayer(), 0, 1);
    }
    cm.dispose();
}
