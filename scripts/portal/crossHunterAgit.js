/*
     名字：埃德爾斯坦
     地图：埃德爾斯坦議會
     描述：310000001
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1616)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(931050500), pi.getMap(931050500).getPortal(1)); //補給品倉庫
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "補給品倉庫，僅限十字獵人成員訪問"));
    return false;
}
