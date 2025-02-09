/*
     名字：狼的測試
     地图：狼之平原
     描述：140010210
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("看來你還是沒有能力領養一隻狼。");
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
            qm.sendNext("我們是在世上流浪的狼族，前來尋找走失的孩子，聽說你正在照顧這個孩子…感謝你這段期間的照顧，現在請把孩子還給我。");
            break;
        case 1:
            qm.sendNextPrevS("柳虎是朋友，不能還給你。");
            break;
        case 2:
            qm.sendYesNo("我們能理解，但狼群也不想失去这个孩子。如果你真的想擁有一隻狼，就必須通過我們的測試，看你是否配養一隻狼，準備好接受狼的#b測試#k了嗎？");
            break;
        case 3:
            if (qm.getMap(914030000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21613).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(914030000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(914030000), qm.getMap(914030000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(140010210));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "狼的考驗目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
