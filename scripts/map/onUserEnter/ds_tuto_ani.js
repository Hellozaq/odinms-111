/*
     名字：隱藏地圖
     地图：決戰影像再生
     描述：931050300
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
            while (ms.getPlayer().getLevel() < 10) {
                ms.getPlayer().levelUp();
            }
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.playMovie(ms.getPlayer().getGender() == 0 ? "DemonSlayer1.avi" : "DemonSlayer2.avi", true));
            break;
        case 1:
            ms.dispose();
            ms.getPlayer().changeMap(ms.getMap(931050000), ms.getMap(931050000).getPortal(0));
    }
}
