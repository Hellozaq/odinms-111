/*
     名字：雷本礦山
     地图：發電廠保安隊
     描述：310050100
 */

function act() {
    if (rm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23949)).getStatus() == 1) {
        rm.getPlayer().changeMap(rm.getMap(931020002), rm.getMap(931020002).getPortal(1));
        rm.getPlayer().startMapTimeLimitTask(600, rm.getMap(310050100));
        rm.getClient().getSession().write(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "防範裝置已啟動，入侵者強制移動到入侵者搜索票3"));
    }
}
