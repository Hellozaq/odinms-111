/*
     名字：雪毛怪人的憤怒-發現線索
     地图：雪精靈之谷
     描述：211040102
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
            qm.sendNextS("雕像散發出耀眼的美麗，像冰塊兒一樣透明，但好像又不是冰塊兒，我到雕像#b周圍#k仔細看了一下。", 3);
            break;
        case 1:
            qm.sendPrevS("雕像後邊的一角碎掉了，周圍也能看到幾個大腳印。這也許就是線索，回去找#r#p2020007##k問問看。", 3);
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(3108).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
