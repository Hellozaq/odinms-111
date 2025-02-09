/*
     名字：黑路
     地图：燃燒的森林3
     描述：914000220
 */

function enter(pi) {
    if (pi.getPlayer().getInfoQuest(21002).indexOf("cmd=o") != -1) {
        return false;
    }
    pi.getPlayer().updateInfoQuest(21002, pi.getPlayer().getInfoQuest(21002) + ";cmd=o");
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("aran/tutorialGuide3", 3));
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "连续攻击后，通过方向键和攻击键可以实现命令攻击。"));
    return false;
}
