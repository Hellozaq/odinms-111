/*
     名字：時間神殿
     地图：時間裂縫
     描述：272000000
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            ms.dispose();
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
            if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31178)).getStatus() > 1 && ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31190)).getCustomData() != 1) {
                Packages.server.quest.MapleQuest.getInstance(31190).forceStart(ms.getPlayer(), ms.getNpc(), 1); //隱藏NPC效果
                ms.dispose();
                return;
            }
            if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31165)).getStatus() != 1) {
                ms.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(31165).forceComplete(ms.getPlayer(), ms.getNpc());
            ms.sendNextS("這裡好像就是凱雷特所說的地方…那前面是誰？", 17);
            break;
        case 1:
            ms.sendNextS("不會吧？她是傳說中的時間女神……？！", 17);
            break;
        case 2:
            ms.dispose();
    }
}
