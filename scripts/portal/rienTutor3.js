/*
     名字：瑞恩島
     地图：寒冷的森林３
     描述：140090300
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21012)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(140090400), pi.getMap(140090400).getPortal(1)); //寒冷的森林４
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "噗倫：英雄，我想為你提供一些知識幫助"));
    return false;
}
