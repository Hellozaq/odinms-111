/*
     名字：瑞恩島
     地图：寒冷的森林１
     描述：140090100
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21010)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(140090200), pi.getMap(140090200).getPortal(1)); //寒冷的森林２
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "噗卡：英雄，請你等等"));
    return false;
}
