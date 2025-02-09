/*
     名字：送便當
     地图：客廳
     描述：100030101
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
            qm.sendAcceptDecline("去農場工作的爸爸忘了帶便當出門，你幫待在#b#m100030300##k的爸爸，把#b#v4032448##t4032448##k送過去。");
            break;
        case 1:
            qm.gainItem(4032448, qm.getPlayer().itemQuantity(4032448) ? 0 : 1);
            qm.sendNextPrev("呵呵，果然是個乖孩子~那麼立刻從家往外走一直#b向左邊走#k，爸爸肚子應該很餓了，你的動作要快。");
            break;
        case 2:
            qm.sendPrev("如果不小心弄掉了便當，要立刻回家，我會再幫你包一個。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(22003).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/5/0"));
            qm.dispose();
    }
}
