/*
     名字：惡魔之門
     地图：幽靈菇菇森林
     描述：100020400
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28238)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getMap(677000002).getCharacters().size() > 0 || cm.getMap(677000003).getCharacters().size() > 0) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "安督西亞漫步道目前擁擠，請稍後再試"));
        return false;
    }
    cm.getPlayer().changeMap(cm.getMap(677000002), cm.getMap(677000002).getPortal(2));
    cm.dispose();
}
