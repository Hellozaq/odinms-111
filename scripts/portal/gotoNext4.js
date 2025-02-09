/*
     名字：獅子王城
     地图：城牆下4
     描述：211060700
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3167)).getStatus() == 2) {

        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(211060800), pi.getMap(211060800).getPortal(1)); //第四座塔
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於城堡被封印，通道已關閉"));
    return false;
}
