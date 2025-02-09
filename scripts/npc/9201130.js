/*
     名字：惡魔之門
     地图：危險的黑鱷魚
     描述：103030200
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28219)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getMap(677000008).getCharacters().size() > 0 || cm.getMap(677000009).getCharacters().size() > 0) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "華利弗漫步道目前擁擠，請稍後再試"));
        return false;
    }
    cm.getPlayer().changeMap(cm.getMap(677000008), cm.getMap(677000008).getPortal(2));
    cm.dispose();
}
