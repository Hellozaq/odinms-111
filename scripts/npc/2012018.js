/*
     名字：艾利遜
     地图：天空之城公園
     描述：200000200
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31000)).getStatus() > 1) {
        cm.getPlayer().changeMap(cm.getMap(200100001), cm.getMap(200100001).getPortal(0));
        cm.dispose();
        return;
    }
    cm.sendOk("克里塞没事吧? 好像连这里都能感觉到黑暗气息了啊......");
    cm.dispose();
}
