/*
     名字：瑞恩島
     地图：瑞恩西邊平原
     描述：140010000
 */

function enter(pi) {

    if (pi.getPlayer().getJob() == 2000 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21014)).getStatus() < 2) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "瑞恩村在右邊，走右邊的通道，進城去見莉琳"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(140010100), pi.getMap(140010100).getPortal(2)); //瑞恩修練場入口
    return true;
}
