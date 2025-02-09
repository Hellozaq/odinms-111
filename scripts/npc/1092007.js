/*
     名字：盲俠
     地图：上層走廊
     描述：120000100
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2925)).getStatus() != 1) {
        cm.sendOk("在拜見卡伊琳大人之前得先通過我這一關！");
        cm.dispose();
        return;
    }
    if (cm.getMap(912040300).getCharacters().size() > 0) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "盲俠的房間目前擁擠，請稍後再試"));
        cm.dispose();
        return;
    }
    cm.getPlayer().changeMap(cm.getMap(912040300), cm.getMap(912040300).getPortal(1));
    cm.dispose();
}
