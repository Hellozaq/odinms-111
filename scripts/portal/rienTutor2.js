/*
     名字：瑞恩島
     地图：寒冷的森林２
     描述：140090200
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21011)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(140090300), pi.getMap(140090300).getPortal(1)); //寒冷的森林３
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "噗伊樂：英雄，你的樣子看起來怪怪的"));
    return false;
}
