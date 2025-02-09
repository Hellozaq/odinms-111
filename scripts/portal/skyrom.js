/*
     名字：納希沙漠
     地图：納希宮殿&amp;lt;走道&gt;
     描述：260000302
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3935)).getStatus() != 1 || pi.getPlayer().itemQuantity(4031574)) {
        return false;
    }
    if (pi.getMap(926000010).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "王妃的寶物倉庫目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(926000010).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(926000010), pi.getMap(926000010).getPortal(0)); //王妃的寶物倉庫
    pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(260000302));
    return true;
}
