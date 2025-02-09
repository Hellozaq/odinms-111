/*
     名字：成為騎士的第一次修煉
     地图：修煉森林1
     描述：130010000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 2) {
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
            qm.sendNext("嗯？是那因哈特派你來的？啊哈！看來是本次新來的騎士嘛！？歡迎，歡迎，我叫#p1102000#。是教你們這些貴族的#b修煉教官#k。哦…為什麼這麼看我…啊，看來你是第一次看到#b皮妖#k嘛。");
            break;
        case 1:
            qm.sendNextPrev("我們是叫皮妖的種族。與小女皇旁邊的#b#p1101001##k對話過嗎？皮妖跟#p1101001#是同一個種族。雖然系列不同…但基本差不多。只生活在#b耶雷弗#k，很快你也會習慣的。");
            break;
        case 2:
            qm.sendNextPrev("啊，你知道嗎？在耶雷弗裡沒有怪物。帶有邪惡氣息的東西是無法生存在耶雷弗裡。但不用擔心，用神獸製作的幻想生物——絹毛鳥修煉就可以，那麼開始吧。");
            break;
        case 3:
            qm.sendAcceptDecline("看你的水準應該能消滅比較強的提提了。去消滅#b#m130010100##k裡的#b#o0100122##k15隻吧，怎麼樣？能抓到#o0100122#吧？");
            break;
        case 4:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(12));
            Packages.server.quest.MapleQuest.getInstance(20017).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
