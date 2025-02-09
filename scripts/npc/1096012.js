/*
     名字：斯托納
     地图：可可島
     描述：3000200
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
            cm.sendNextS("好啦，出發！出發！", 1);
            break;
        case 1:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction4.img/effect/cannonshooter/flying1/0", 2000, 0, -14, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 2:
            cm.dispose();
            cm.getPlayer().changeMap(cm.getMap(912060300), cm.getMap(912060300).getPortal(0));
    }
}
