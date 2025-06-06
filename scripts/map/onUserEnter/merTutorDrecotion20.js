/*
     名字：結冰的精靈森林
     地图：國王休息處
     描述：910150004
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            ms.dispose();
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
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction5.img/effect/mercedesInIce/merBalloon/9", 2000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 1:
            ms.dispose();
            ms.getPlayer().changeMap(ms.getMap(910150005), ms.getMap(910150005).getPortal(0));
    }
}
