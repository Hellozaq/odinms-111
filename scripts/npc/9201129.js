/*
     名字：惡魔之門
     地图：和天空鄰近的地方
     描述：101020200
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28198)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getMap(677000000).getCharacters().size() > 0 || cm.getMap(677000001).getCharacters().size() > 0) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "瑪巴斯漫步道目前擁擠，請稍後再試"));
        return false;
    }
    cm.getPlayer().changeMap(cm.getMap(677000000), cm.getMap(677000000).getPortal(2));
    cm.dispose();
}
