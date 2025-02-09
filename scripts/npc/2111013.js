/*
     名字：畫框
     地图：失蹤煉金術士的家
     描述：261000001
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3311)).getStatus() != 1) {
        cm.sendOk("特力術士的照片。");
        cm.dispose();
        return;
    }
    var progress = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3311)).getCustomData();
    prog = (progress == 3 ? 5 : 4);

    if (progress != 5)
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3311)).setCustomData(prog);

    cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3311)), true);
    cm.sendOk("這是特力術士的照片，他似乎在用蒙特鳩學院的徽章來裝潢一個小盒子，他是蒙特鳩學會的一名會員。");
    cm.dispose();
}
