/*
     名字：櫻花處入口
     地图：櫻花處
     描述：101050000
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
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
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 1:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction5.img/effect/mercedesQuest/merBalloon/0", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 2:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction5.img/effect/mercedesQuest/merBalloon/1", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 3:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 4:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.sendNextS("等下…好像有些奇怪……我的等級是10級？", 3);
            break;
        case 5:
            cm.dispose();
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            Packages.server.quest.MapleQuest.getInstance(24093).forceStart(cm.getPlayer(), 0, 1);
    }
}
