/*
     名字：靈藥幻境
     地图：金勾海賊團基地3
     描述：251010403
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22408)).getStatus() != 1) {
        return true;
    }
    if (pi.getMap(925110000).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "海盜的寶物倉庫目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(925110000).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(925110000), pi.getMap(925110000).getPortal(1)); //海盜的寶物倉庫
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(251010403));
    return true;
}
