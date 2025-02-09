/*
     名字：墮落城市地鐵
     地图：2號線第2區段
     描述：103020410
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2866)).getStatus() == 1) {
        if (pi.getMap(910310200).getCharacters().size() < 1) {
            pi.getMap(910310200).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(910310200), pi.getMap(910310200).getPortal(1)); //2號線3區間
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(103020410));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "2號線3區間目前擁擠，請稍後再試"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103020420), pi.getMap(103020420).getPortal(3)); //2號線3區間
    return true;
}
