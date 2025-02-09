/*
     名字：一口乾草
     地图：農場中心地
     描述：100030300
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("唔…奇怪嗎？那再想想。");
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
            qm.sendAcceptDecline("或許蜥蜴也像牛一樣能吃乾草？週邊有很多乾草拿去餵它吧，不吃再找其他食物不就行了。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(22502).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/12/0"));
            qm.dispose();
    }
}
