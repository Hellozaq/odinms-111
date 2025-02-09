/*
     名字：受災鎮的鎮長
     地图：新葉城-市區中心
     描述：600000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
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
            qm.sendNext("出大事了！新葉城-市區中心剛發生了一場强震！建築變成廢墟，平地變成溝壑。我都快認不出這座我一手創建的都市了！我倒是想雇個地震學家研究下是什麼情况，但預算實在是不够，你好像對這方面頗有研究，能幫我這個忙嗎？");
            break;
        case 1:
            qm.sendAcceptDecline("我就知道你會答應我！去新葉城-市區中心跟我碰頭吧，如果你不方便，我可以派我的特製市長專用隱形豪華轎車來接你，還不收你錢，如何？");
            break;
        case 2:
            qm.sendPrev("好！我就知道你不會拒絕，對了，你是看不見轎車的，原地等著就是。");
            break;
        case 3:
            qm.dispose();
            Packages.server.quest.MapleQuest.getInstance(28745).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(600000000), qm.getMap(600000000).getPortal(8));
    }
}
