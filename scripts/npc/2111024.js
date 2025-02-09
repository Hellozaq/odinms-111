/*
     名字：秘密通道
     地图：研究所B-1區
     描述：261020200
 */

function start() {
    cm.sendGetText("請輸入通行證密碼。 #bPassword#k!");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getText() == cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3360)).getCustomData()) { //讀取隨機密碼
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3360)).setCustomData(1);
            cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3360)), true);
            cm.getPlayer().changeMap(cm.getMap(261030000), cm.getMap(261030000).getPortal(cm.getPlayer().getMap().getId() == 261010000 ? 2 : 1));
            cm.dispose();
            return;
        }
        cm.sendOk("輸入的密碼錯誤。");
    }
    cm.dispose();
}
