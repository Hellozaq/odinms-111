/*
     名字：隱藏地圖
     地图：魔法圖書館
     描述：910110000
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20718)).getCustomData() == 1) {
        if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
            return false;
        }
        Packages.server.quest.MapleQuest.getInstance(20732).forceStart(pi.getPlayer(), 0, 1);
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(101000000), pi.getMap(101000000).getPortal(7)); //魔法森林
    return true;
}
