/*
     名字：隱藏地圖
     地图：城入口
     描述：926150000
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
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 1:
            ms.sendNextS("#b(這一地區好像完全變成了廢墟。)#k", 17);
            break;
        case 2:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 3:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            ms.sendNextS("#b(凡雷恩不知道有沒有把秘密通道堵上。但是以他的性格，應該不會去管……)#k", 17);
            break;
        case 4:
            ms.sendNextS("#b(在城堡入口附近找找看吧。)#k", 17);
            break;
        case 5:
            ms.dispose();
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
    }
}
