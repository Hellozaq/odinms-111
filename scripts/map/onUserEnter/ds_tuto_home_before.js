/*
     名字：隱藏地圖
     地图：場面轉換0
     描述：924020010
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
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/text11", 3));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 4000));
            break;
        case 1:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction6.img/DemonTutorial/Scene2"));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 9000));
            break;
        case 2:
            ms.dispose();
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.getPlayer().changeMap(ms.getMap(924020000), ms.getMap(924020000).getPortal(0));
    }
}
