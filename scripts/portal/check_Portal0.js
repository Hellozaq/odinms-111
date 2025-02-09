/*
     名字：過去的神木村
     地图：燃燒的神木村1
     描述：272000100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31168)).getStatus() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(272000200), pi.getMap(272000200).getPortal(1)); //燃燒的神木村2
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "克勞烏好像有事情要吩咐"));
    return false;
}
