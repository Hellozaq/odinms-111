/*
     名字：惡魔之門
     地图：大岩石路
     描述：102020300
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28179)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getMap(677000004).getCharacters().size() > 0 || cm.getMap(677000005).getCharacters().size() > 0) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "安卓斯漫步道目前擁擠，請稍後再試"));
        return false;
    }
    cm.getPlayer().changeMap(cm.getMap(677000004), cm.getMap(677000004).getPortal(2));
    cm.dispose();
}
