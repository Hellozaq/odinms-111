/*
     名字：[十字獵人]另一個空間
     地图：未接近地區
     描述：102040600
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
            qm.sendYesNo("就是這個發著藍色光的柱子，讓遺跡發掘地的怪物變得殘暴起來的嗎？我想我們應該進去裡面看看，你準備好了嗎？");
            break;
        case 1:
            qm.sendPrev("如果發生什麼危險的話一定要保護我啊。那麼，一…二…三！！");
            break;
        case 2:
            if (qm.getMap(931050410).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1608).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(931050410).resetFully();
                qm.getPlayer().changeMap(qm.getMap(931050410), qm.getMap(931050410).getPortal(2));
                qm.getPlayer().getMap().spawnNpc(9073000, new java.awt.Point(199, 169));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(102040600));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "奇怪的通道目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
