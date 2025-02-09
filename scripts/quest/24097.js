/*
     名字：變異菇菇的血
     地图：粗岩地帶
     描述：102020400
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24097)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(24097).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("這就是變異菇菇的血……");
            break;
        case 1:
            qm.sendPrev("……什麼？！溫斯頓說我有東西要給你嗎？……我沒什麼好給你的，那就幫你提升人氣吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/6/0# 8 \r\n#fUI/UIWindow.img/QuestIcon/8/0# 700 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(24097).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4033075, -1);
            qm.gainExp(700);
            qm.getPlayer().addFame(8); //人氣
            qm.dispose();
    }
}
