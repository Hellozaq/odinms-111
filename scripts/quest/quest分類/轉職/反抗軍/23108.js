/*
     名字：第一個任務
     地图：反抗者本部
     描述：310010000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23108)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23108).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("歡迎你，我是負責末日反抗軍對外任務的吉可穆德。在這種地方見面，還挺不好意思的。");
            break;
        case 1:
            qm.sendNextPrev("其實我應該要當盜賊教官。可是，你也知道的末日反抗軍是不會培養盜賊，所以這件事由我來負責了呢。");
            break;
        case 2:
            qm.sendPrev("總之，我負責的是對外任務，今後你和我見面的次數可能要比你的轉職教官裴爾還要多。在黑色翅膀被趕出這個地方之前，執行任務的時候要做好完全的準備。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 200 exp");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(23108).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(23129).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.gainExp(200);
            qm.dispose();
    }
}
