/*
     名字：永無止盡的戰鬥
     地图：偉大的精神降臨
     描述：910150100
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24020)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(24020).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("歡迎我的國王再次榮耀歸來。");
            break;
        case 1:
            qm.sendAcceptDecline("現在的你已經超越了自己，為了表示對大家對你的認可，獎勵你。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s20021005# #q20021005# \r\n#v1142340# #t1142340# 1");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(24020).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(20021005), 1, 1, -1);
            qm.gainItem(1142340, 1);
            qm.dispose();
    }
}
