/*
     名字：痕跡的調查
     地图：上層走廊
     描述：120000100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            qm.sendNext("這個氣息……果然很奇怪。很不尋常。嗯？仔細看，在青苔下麵好像有某種奇怪的紋樣？在交給卡伊琳之前，最好先把青苔清除掉。");
            break;
        case 1:
            qm.sendAcceptDecline("在走廊裡清理的話，會給來往的船員帶來影響，我們到房裡去吧。");
            break;
        case 2:
            if (qm.getMap(912070000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1501).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(912070000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(912070000), qm.getMap(912070000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(120000100));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "盲俠的房間目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
