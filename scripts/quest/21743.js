/*
     名字：製作特殊墨汁
     地图：桃花仙境
     描述：250000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
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
            qm.sendNext("什麼事情？什麼？修復字畫？讓我看看。…哎呀。怎麼會把字畫放在沸水裡煮啊？如果不是和桃醫仙一樣的笨蛋，絕不會有這種失誤的。還好這些紙比較結實。");
            break;
        case 1:
            qm.sendNextPrev("復原字畫不是不可能的事。有特殊的墨汁就可以變回原樣。正好我可以製作特殊墨水，把材料找回來就給你製作吧，當然得需要交一定的手續費。");
            break;
        case 2:
            qm.sendAcceptDecline("需要50個修練用的稻草娃娃的痕跡，50個修練用木頭娃娃的痕跡，100個修練用罈壺的甕碎片，外加500000手續費。不要忘記哦~");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21743).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(925041000), qm.getMap(925041000).getPortal(1));
            qm.dispose();
    }
}
