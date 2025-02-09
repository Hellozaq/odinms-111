/*
     名字：詹姆士的下落（１）
     地图：菇菇森林路口
     描述：106020000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2325)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2325).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendAcceptDecline("我…我怕…請一定要幫助我呀…\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(2325).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(1000);
            qm.dispose();
    }
}
