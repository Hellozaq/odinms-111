/*
     名字：詛咒的餘波
     地图：精靈遊俠
     描述：精靈遊俠
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 5));
            qm.sendNextS("左手可以動……", 3);
            break;
        case 1:
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 9));
            qm.sendNextS("右手也沒問題……", 3);
            break;
        case 2:
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 15));
            qm.sendNextS("腿也沒事。", 3);
            break;
        case 3:
            qm.sendNextS("傷全都好了，只是等級……呃呃呃……好想哭……", 3);
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(24041).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            qm.dispose();
    }
}
