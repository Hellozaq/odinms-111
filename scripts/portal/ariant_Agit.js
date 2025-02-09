/*
     名字：納希沙漠
     地图：納希民宅
     描述：260000200
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3928)).getStatus() > 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3931)).getStatus() > 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3934)).getStatus() > 1) {

        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(260000201), pi.getMap(260000201).getPortal(1)); //破舊的空屋
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "破舊的空屋僅限沙影團隊成員訪問"));
    return false;
}
