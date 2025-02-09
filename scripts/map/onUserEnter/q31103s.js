/*
     名字：被破壞的弓箭手村
     地图：被破壞的弓箭手村
     描述：271010000
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
            if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31102)).getStatus() != 2 || ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31103)).getStatus() > 0) {
                ms.dispose();
                return;
            }
            ms.sendNextS("你是誰！好像從來沒見過，你從那裏來的？", 5, 2142003);
            break;
        case 1:
            ms.sendNextPrevS("嗯，是你？！做出特殊髮型風格的比克愛德華！！！ (腦袋還是這麼大……)我不是可疑的人。", 17);
            break;
        case 2:
            ms.sendNextPrevS("你知道我曾經是髮型師嗎？不管怎樣，你先去找長老阿勒斯吧。", 5, 2142003);
            break;
        case 3:
            ms.sendNextPrevS("長老阿勒斯？ (……那個不懂事的阿勒斯成了長老？)", 17);
            break;
        case 4:
            ms.sendNextPrevS("快去吧！！", 5, 2142003);
            break;
        case 5:
            ms.dispose();
            Packages.server.quest.MapleQuest.getInstance(31103).forceStart(ms.getPlayer(), 0, null);
            ms.getPlayer().changeMap(ms.getMap(271010000), ms.getMap(271010000).getPortal(2));
    }
}
