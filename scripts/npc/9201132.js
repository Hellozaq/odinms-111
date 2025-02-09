/*
     名字：惡魔之門
     地图：藍色緞帶海岸
     描述：120020300
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28256)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getMap(677000006).getCharacters().size() > 0 || cm.getMap(677000007).getCharacters().size() > 0) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "克羅賽爾漫步道目前擁擠，請稍後再試"));
        return false;
    }
    cm.getPlayer().changeMap(cm.getMap(677000006), cm.getMap(677000006).getPortal(2));
    cm.dispose();
}
