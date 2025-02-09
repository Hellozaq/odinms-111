/*
     名字：931000632
     地图：931000632
     描述：931000632
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
            ms.sendNextS("祝你幸福……", 5, 2159348);
            break;
        case 1:
            ms.dispose();
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction5.img/unitedMaple/Quest23144"));
    }
}
