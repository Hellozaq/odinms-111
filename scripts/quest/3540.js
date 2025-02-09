/*
     名字：尋找遺失的記憶
     地图：弓箭手村
     描述：100000000
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("哦，這不是小不點嗎？真的好久不見了。嗯？和你的回憶嗎？");
            break;
        case 1:
            qm.sendNextPrev("雖然沒有宏偉到可以說是回憶的程度……如果是克里特家的孩子來送信的時候，我還記得。直到那時，怎麼都不會想到你會是拯救卡蜜拉的人，而且現在成為了代表楓之谷世界的英雄……");
            break;
        case 2:
            qm.sendNextPrev("歲月驚人啊。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3540).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
