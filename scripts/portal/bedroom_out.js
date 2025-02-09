/*
     名字：鯨魚號
     地图：寢室
     描述：912060500
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2570)).getStatus() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "離開這裏之前，請先與斯托納交談"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(120000100), pi.getMap(120000100).getPortal(13)); //上層走廊
    return true;
}
