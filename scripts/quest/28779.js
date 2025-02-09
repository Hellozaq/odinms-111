/*
     名字：銀河鑽頭爆炸
     地图：新葉城
     描述：600000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28779)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(28779).forceStart(qm.getPlayer(), qm.getNpc(), 0);
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28779)).getCustomData() < 30) {
                qm.sendOk("拯救城市的英雄，目前你摧毀了葛拉特鑽孔機" + qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28779)).getCustomData() + "次。估計你得把那玩意兒摧毀30遍。我知道這有點多，不過，事關新葉城的未來啊！");
                qm.dispose();
                return;
            }
            qm.sendNext("看起來外星人的很快就沒有原料能拿來繼續製作葛拉特鑽孔機了！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v3062220# #t3062220# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1000000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(28779).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28779)).setStatus(0);
            qm.gainItem(3062220, 1);
            qm.gainExp(1000000);
            qm.dispose();
    }
}
