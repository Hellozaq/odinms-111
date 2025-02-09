/*
     名字：找回遺失的記憶
     地图：尖兵
     描述：尖兵
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
            qm.sendNext("嗯？找我有什么事？");
            break;
        case 1:
            qm.sendNextPrev("不，回想起来，一切的开始好像是从研究所逃出来的时候，很想跟人讲讲那时候的事情。");
            break;
        case 2:
            qm.sendNextPrev("呃。别提了，那时候，我以为自己只能坐以待毙了。");
            break;
        case 3:
            qm.sendNextPrev("哈哈，是啊。但是之前的事情我一点都想不起来了。");
            break;
        case 4:
            qm.sendNextPrev("…尖兵");
            break;
        case 5:
            qm.sendNextPrev("虽然我还没有全部回忆起来，但那时幸亏从研究所中逃了出来。");
            break;
        case 6:
            qm.sendNextPrev("虽然过去的事情还一点都想不起来，但多亏和你一起从研究室中逃了出来…我才能回想起其它的那些记忆，当然，我是不会放弃的。");
            break;
        case 7:
            qm.sendNextPrev("是的，你可以的，今后会慢慢回忆起来的，打起精神来！");
            break;
        case 8:
            qm.sendNextPrev("喽，谢谢你，鲁提。");
            break;
        case 8:
            qm.sendNextPrev("(原来记忆是这种感觉啊，心里感到了一丝温暖。)");
            break;
        case 9:
            Packages.server.quest.MapleQuest.getInstance(3523).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
