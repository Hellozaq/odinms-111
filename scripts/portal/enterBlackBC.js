/*
     名字：玩具城
     地图：天空露臺&amp;lt;5&gt;
     描述：220011000
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22583)).getStatus() == 1) {
        if (pi.getMap(922030010).getCharacters().size() < 1 && pi.getMap(922030011).getCharacters().size() < 1) {
            pi.getMap(922030011).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(922030010), pi.getMap(922030010).getPortal(1)); //天空露臺
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "天空露臺目前擁擠，請稍後再試"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22584)).getStatus() == 1) {
        if (pi.getMap(922030020).getCharacters().size() < 1 && pi.getMap(922030021).getCharacters().size() < 1 && pi.getMap(922030022).getCharacters().size() < 1) {
            pi.getMap(922030022).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(922030020), pi.getMap(922030020).getPortal(1)); //天空露臺
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "天空露臺目前擁擠，請稍後再試"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(220011001), pi.getMap(220011001).getPortal(1)); //天空陽台
    return true;
}
