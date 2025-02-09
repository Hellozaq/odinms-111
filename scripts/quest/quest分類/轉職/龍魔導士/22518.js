/*
     名字：王年海接連不斷的妄想
     地图：芽孢山丘
     描述：100020000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 3) {
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
            qm.sendNext("我就是不相信，那個斯坦…就是那個吝嗇鬼，因為我吃了他的一顆糖果，兩年都不和我說話。上次借了他3000楓幣，我只是稍微晚點再還給他，結果他按照每秒來計算利息……我就是不相信。");
            break;
        case 1:
            qm.sendNextPrevS("(斯坦大叔其實只是和你開個玩笑…)");
            break;
        case 2:
            qm.sendNextPrev("我不相信，斯坦會派這樣強的冒險家來我的修煉場接受修煉。這毫無意義。斯坦從來沒有這麼好心。但是……好的，我會再測試你一次，但這是最後一次了。我知道斯坦一定是有什麼目的。");
            break;
        case 3:
            qm.sendNextPrevS("(他好像還是不相信我，以為斯坦大叔有什麼陰謀。)");
            break;
        case 4:
            qm.sendAcceptDecline("這個測試很簡單。只要擊退修煉場裡的100隻#r#o9300386##k就可以了。哈哈……如果你能做到，我就相信你。");
            break;
        case 5:
            if (qm.getMap(910060100).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(22518).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(910060100).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910060100), qm.getMap(910060100).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(100020000));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "王年海菇菇仔的修練場目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
