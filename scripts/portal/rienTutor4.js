/*
     名字：瑞恩島
     地图：寒冷的森林４
     描述：140090400
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21013)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(140090500), pi.getMap(140090500).getPortal(1)); //寒冷的森林５
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "噗滋奇：英雄，你還沒拿到我為你準備的禮物呢"));
    return false;
}
