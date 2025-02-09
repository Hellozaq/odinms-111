/*
     名字：狂豹獵人之路
     地图：秘密廣場
     描述：310010000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23012)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23012).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("謝謝你這麼爽快地接受……你真的經過深思熟慮了嗎？狂豹獵人雖然很強，但也很難操作。在操作騎寵的同時，還必須進行攻擊，囙此在操控方面要求很高。你能做到嗎？希望你仔細考慮清楚之後再回答我。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(23012).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(23977).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.resetStats(4, 4, 4, 4);
            qm.gainItem(1462092, 1);
            qm.gainItem(2061000, 500);
            qm.getPlayer().changeJob(3300);
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30001061), 1, 1, -1);
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.updateJaguar(qm.getPlayer())); //防止捕獲技能閃退
            qm.sendNext("很好！歡迎你正式成為末日反抗軍，從現在開始，你就是狂豹獵人了。希望你能騎著騎寵，靈活機動地消滅敵人。");
            break;
        case 2:
            qm.sendOk("如果在外面提到狂豹獵人的話，難免會引起黑色翅膀的懷疑，所以從現在開始，你要叫我責任老師。你是來教室接受特殊課程的學生。呵呵呵……有意思吧？我的特殊課程會把你培養成最好的狂豹獵人。");
            break;
        case 3:
            qm.dispose();
    }
}
