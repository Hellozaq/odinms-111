/*
     名字：龍魔導士的工作
     地图：寶貝龍
     描述：寶貝龍
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 4) {
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
            qm.sendNext("主人！我非常感動！主人真是個善良的人，看到你幫助那個年紀很大的人，我就很感動，我們以後必須幫助那些遇到困難的人，那是我們的使命！");
            break;
        case 1:
            qm.sendNextPrevS("嗯？怎麼突然這麼說？？使命？");
            break;
        case 2:
            qm.sendNextPrev("嗯！主人和我現在擁有了強大的力量，不是嗎？我們之所以可以擁有那種力量，是為了幫助其他人！我是這麼想的，作為龍魔導士，這是你必須做的事情！");
            break;
        case 3:
            qm.sendNextPrevS("作為龍魔導士必須做的事情？");
            break;
        case 4:
            qm.sendAcceptDecline("是的！讓我們去幫助那些有困難的人吧！在什麼地方，一定有人在期待得到主人的幫助！");
            break;
        case 5:
            qm.sendPrevS("答應了以龍魔導士的身份去幫助別人，嗯……感覺自己很帥，好的！在弓箭手村看看有沒有人正在為無法解決的事情而苦惱吧，現在我應該可以去幫助別人了。", 3);
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(22512).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
