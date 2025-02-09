/*
     名字：第三個導管手把
     地图：失蹤煉金術士的家
     描述：261000001
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3339)).getStatus() != 1) {
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3339)).getStatus() > 1)
            cm.getPlayer().changeMap(cm.getMap(261000001), cm.getMap(261000001).getPortal(1));
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3339)).getCustomData() != 2) {
        cm.sendOk("請按照順序安放導管");
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3339)).setCustomData(0);
        cm.dispose();
        return;
    }
    cm.sendGetText("若想進入秘密書庫，请输入#b暗號#k");
}

function action(mode, type, selection) {
    if (mode > 0)
        if (cm.getText() == "琵丽雅是我的爱" || cm.getText() == "") {
            cm.getPlayer().changeMap(cm.getMap(261000001), cm.getMap(261000001).getPortal(1));
            cm.dispose();
            return;
        }
    cm.sendOk("输入的密碼錯誤。");
    cm.dispose();
}
