/*
     名字：黃船長
     地图：靈藥幻境
     描述：251000000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22587)).getStatus() != 1) {
        cm.sendOk("真是令人擔心啊！海盜竟然在藥草田的另一端建立了基地…");
        cm.dispose();
        return;
    }
    if (cm.getMap(925110001).getCharacters().size() > 0) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "海賊團基地目前擁擠，請稍後再試"));
        cm.dispose();
        return;
    }
    cm.getMap(925110001).resetFully();
    cm.getPlayer().changeMap(cm.getMap(925110001), cm.getMap(925110001).getPortal(1));
    cm.getPlayer().startMapTimeLimitTask(1800, cm.getMap(251000000));
    cm.dispose();
}
