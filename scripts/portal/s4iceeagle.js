/*
     名字：艾納斯島
     地图：危險的絕壁
     描述：211040700
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(6242)).getStatus() != 1) {
        return false;
    }
    if (pi.getMap(921100210).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "菲瑞爾的巢穴目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(921100210).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(921100210), pi.getMap(921100210).getPortal(1));
    pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(211040700));
    return true;
}
