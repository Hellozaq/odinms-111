/*
     名字：登記成為跟隨者！
     地图：維多利亞港
     描述：104000000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2232)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2232).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getJunior1() < 1) {
                qm.sendOk("你還沒有找到合適的人選嗎？請多留意一下新來的冒險者，也許她們會需要你的#b幫助#k。");
                qm.dispose();
                return;
            }
            qm.sendNext("你的家族增加了新的成員，你現在是名合格的領路人了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(2232).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(3000);
            qm.dispose();
    }
}
