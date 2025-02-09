/*
     名字：雪歸島的地圖
     地图：靈藥幻境
     描述：251000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 4) {
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
            qm.sendSimple("你是冒險家？在你身上，可以感覺到異常強大的氣息。像你這樣的人，到這裡來有什麼事嗎？嗯？你好像找我有事吧。是什麼事呢？\r\n#L0##b#t4032472#在你這裡嗎？#l");
            break;
        case 1:
            qm.sendSimple("雪歸島…？那是很久以前我去深海裡打漁的時候看到過的島。沒錯，我這裡確實有地圖。因為有海盜，所以我沒敢走太遠，但地圖我沒有弄丟。\r\n#L0##b你能把#t4032472#送我嗎？#l");
            break;
        case 2:
            qm.sendSimple("那島週邊有很多暗礁，浪也很大，所以很難到達。我也只去過那裡一次。那個島看上去像是一隻覆蓋著雪的海龜，所以我才給它取了這樣一個名字，事實上，那原來是個無名島，你還是想要去嗎？\r\n#L0##b我還是想得到地圖。#l");
            break;
        case 3:
            qm.sendAcceptDecline("嗯。既然你這麼說，那就沒辦法了。如果你能答應我一個請求，我就把地圖送給你。請你幫我消滅威脅靈藥幻境的金勾海賊團的#r#o9001029##k和#r#o9001030##k各#r100隻#k。你可以做到嗎？");
            break;
        case 4:
            qm.sendAcceptDecline("需要的話，我可以把你送到海賊的巢穴去。你想現在就出發嗎？");
            break;
        case 5:
            if (qm.getMap(925110001).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(22587).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(925110001).resetFully();
                qm.getPlayer().changeMap(qm.getMap(925110001), qm.getMap(925110001).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(1200, qm.getMap(251000000));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "海賊團基地目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
