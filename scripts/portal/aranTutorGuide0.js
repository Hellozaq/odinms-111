/*
     名字：黑路
     地图：燃燒的森林1
     描述：914000200
 */

function enter(pi) {
    if (pi.getPlayer().getInfoQuest(21002).indexOf("normal=o") != -1) {
        return false;
    }
    pi.getPlayer().updateInfoQuest(21002, pi.getPlayer().getInfoQuest(21002) + ";normal=o");
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("aran/tutorialGuide1", 3));
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "按一下Ctrl键，能够对怪物进行一般攻击。"));
    return false;
}
