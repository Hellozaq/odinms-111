/*
     名字：菇菇森林探險（１）
     地图：菇菇森林路口
     描述：106020000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("請不要#b拋棄#k我們菇菇王國啊。");
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
            qm.sendAcceptDecline("要拯救公主，首先必須調查菇菇森林。可是企鵝國王那傢伙不知用了什麼法術形成了一個強大的結界，阻斷了進入城堡的道路。請您前往#b調查#k吧。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(2314).forceStart(qm.getPlayer(), qm.getNpc(), 0);
            qm.dispose();
    }
}
