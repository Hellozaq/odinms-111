/*
     名字：巴洛古的寺院
     地图：神殿底層
     描述：105100100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2238)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(105100101), pi.getMap(105100101).getPortal(1)); //崔斯坦的墳墓
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(5, "崔斯坦的灵魂：你还没有通过这里的资格。"));
    return false;
}
