/*
     名字：雷本礦山
     地图：發電廠大廳
     描述：310050000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23957)).getStatus() == 1) {
        if (pi.getMap(931020011).getCharacters().size() < 1) {
            pi.getMap(931020011).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931020011), pi.getMap(931020011).getPortal(1)); //艾雷諾爾的房間
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310050000));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "艾雷諾爾的房間目前擁擠，請稍後再試"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "艾雷諾爾的房間裡傳出奇怪的寵物聲音"));
    return false;
}
