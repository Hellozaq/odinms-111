/*
     名字：獅子王城
     地图：第二座塔
     描述：211060400
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3143)).getStatus() > 1) {

        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(211060410), pi.getMap(211060410).getPortal(1)); //矮城牆1
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於城堡被封印，通道已關閉"));
    return false;
}
