/*
     名字：升降機操作臺
     地图：訓練房入口
     描述：310010010
 */

function start() {
    cm.sendSimple("一臺可以通往想去的訓練房的升降機，請選擇想去的樓層\r\n#L0##b地下二層 訓練房A#l\r\n#L1#地下三層 訓練房B#l\r\n#L2#地下四層 訓練房C#l\r\n#L3#地下五層 訓練房D#l" + (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23118)).getStatus() == 1 ? "\r\n#L4#地下六層 訓練房A" : "") + "");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (selection < 4) {
            cm.getPlayer().changeMap(cm.getMap(310010100 + selection * 100), cm.getMap(310010100 + selection * 100).getPortal(1));
            cm.dispose();
            return;
        }
        if (cm.getMap(931000400).getCharacters().size() > 0) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "訓練房A目前擁擠，請稍後再試"));
            cm.dispose();
            return;
        }
        cm.getMap(931000400).resetFully();
        cm.getPlayer().changeMap(cm.getMap(931000400), cm.getMap(931000400).getPortal(1));
        cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(310010010));
    }
    cm.dispose();
}
