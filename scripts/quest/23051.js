/*
     名字：黑色翅膀的新武器
     地图：陷阱！實驗室監獄
     描述：931000312
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23051)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23051).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("黑色翅膀的新武器……成功地破壞掉了嗎？我真不敢相信自己的眼睛。你改變了未來！真的，真的很了不起！你能加入末日反抗軍，真是太好了！真的！ 真的……太好了！");
            break;
        case 1:
            qm.sendPrevS("啊……我一時激動，都忘了要緊事。傑利麥勒知道新武器被毀後，一定會率領手下攻來，在此之前趕快逃跑吧。我這就使用地下總部地下本部基地返回卷軸。一……二……三！", 3);
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23051).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(310010000), qm.getMap(310010000).getPortal(0));
            qm.dispose();
    }
}
