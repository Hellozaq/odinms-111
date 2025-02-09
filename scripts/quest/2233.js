/*
     名字：增加聲望值！
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2233)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2233).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getCurrentRep() < 1000) {
                qm.sendOk("幫助家族成員一起狩獵，是#b增加#k聲望值的好辦法。");
                qm.dispose();
                return;
            }
            qm.sendNext("你已經是一位優秀的領路人，請與你的家族成員一起分享你的經驗吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(2233).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(10000);
            qm.dispose();
    }
}
