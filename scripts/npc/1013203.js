/*
     名字：伊培賀
     地图：青蛙嘴的家
     描述：922030000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22582)).getStatus() != 1) {
        cm.sendOk("呼嗚…會辦事的人太少了！");
        cm.dispose();
        return;
    }
    cm.getPlayer().changeMap(cm.getMap(922030002), cm.getMap(922030002).getPortal(1));
    cm.dispose();
}
