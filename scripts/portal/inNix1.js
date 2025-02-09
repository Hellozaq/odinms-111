/*
     名字：神木村
     地图：格瑞芬多森林
     描述：240020101
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20403)).getStatus() > 0 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20404)).getStatus() < 2) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(240020600), pi.getMap(240020600).getPortal(1)); //偏僻森林
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "偏僻森林禁止外來者訪問"));
    return false;
}
