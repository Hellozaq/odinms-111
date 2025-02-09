/*
     名字：獅子王城
     地图：第三座塔
     描述：211060600
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3143)).getStatus() > 1) {

        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(211060620), pi.getMap(211060620).getPortal(2)); //高城牆1
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於城堡被封印，通道已關閉"));
    return false;
}
