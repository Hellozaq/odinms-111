/*
     名字：亞廷的沙影團
     地图：納希民宅
     描述：260000200
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            qm.sendAcceptDecline("沒想到你會這麼的强…以你的水准也許可以成為沙影團員也說不定。對沙影團員來說，最重要的就是力量的强大，而你…看來已經具備了足够的實力！但我還是要再進行一次#b測試#k…如何？可以接受嗎？");
            break;
        case 1:
            qm.sendPrev("若想要實際測試你的力量，應該需要親自去體驗吧？我想和你進行一場對戰！別擔心，我也不想傷害你…就用我的#b分身#k來對付你好了！");
            break;
        case 2:
            if (qm.getMap(926000000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3933).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(926000000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(926000000), qm.getMap(926000000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(260000200));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "納希綠洲街道目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
