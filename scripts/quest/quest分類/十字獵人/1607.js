/*
     名字：[十字獵人]奇怪的女子和奇怪的通道
     地图：遺跡發掘隊營區
     描述：102040200
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 4) {
                qm.sendOk("我是路癡……我們一起去的話，肯定很快就能找得到。");
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
            qm.sendNext("我沒有想到……在這裡會再次見到你。");
            break;
        case 1:
            qm.sendNextPrevS("#b（……那是在墮落城市地鐵站裡的那個奇怪的女人）嘿，好久不見了！");
            break;
        case 2:
            qm.sendNextPrev("我來發掘區是為了幫忙的，但好像來晚了。你在這附近看見過一個奇怪的門嗎？");
            break;
        case 3:
            qm.sendNextPrevS("#b奇怪的門？是的，我在未接近地區見過那樣的東西。它好像散發出某種陰森的氣息……");
            break;
        case 4:
            qm.sendAcceptDecline("真的嗎？你願意帶我一起去看看嗎？");
            break;
        case 5:
            qm.sendNextPrev("那我們現在就移動到#b#m102040600##k！");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(1607).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(102040600), qm.getMap(102040600).getPortal(1));
            qm.dispose();
    }
}
