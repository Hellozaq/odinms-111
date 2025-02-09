/*
     名字：機甲戰神之路
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23013)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23013).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("請你好好考慮一下。你真的要選擇機甲戰神嗎？你認為這個職業適合你的反抗軍之路嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(23013).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(23977).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.resetStats(4, 4, 4, 4);
            qm.gainItem(1492014, 1);
            qm.getPlayer().changeJob(3500);
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30001068), 1, 1, -1);
            qm.sendNext("從現在開始，你就是機甲戰神了。你身為可以操控機械的人，要利用所有知識和方法來對付眼前的敵人。");
            break;
        case 2:
            qm.sendOk("如果被黑色翅膀發現我們的真實身份就糟了，所以從現在開始，你要叫我責任老師。而你就是在放學後到我這接受課外輔導的學生。在這特殊的輔導中，我會把你教成强大的機甲戰神。");
            break;
        case 3:
            qm.dispose();
    }
}
