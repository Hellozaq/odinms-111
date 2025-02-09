/*
     名字：倒下的騎士
     地图：黑暗魔女的洞穴
     描述：924010100
 */

function start() {
    cm.sendYesNo("…黑暗魔女……把我困在這裡…快！時間來不急了，她正在用魔法攻佔耶雷弗，快去制止即將發生的一切！我會用我的魔法將你#b傳送#k過去，希望一切還來得及。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getMap(913030000).getCharacters().size() < 1) {
            cm.getMap(913030000).resetFully();
            cm.getPlayer().changeMap(cm.getMap(913030000), cm.getMap(913030000).getPortal(0));
            cm.getPlayer().getMap().spawnNpc(1104002, new java.awt.Point(-430, 88));
            cm.getPlayer().startMapTimeLimitTask(1800, cm.getMap(924010100));
            cm.dispose();
            return;
        }
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "寧靜的耶雷弗目前擁擠，請稍後再試"));
    }
    cm.dispose();
}
