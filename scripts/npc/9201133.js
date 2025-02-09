/*
     名字：阿司塔洛之門
     地图：邪惡氣息的森林1
     描述：101040310
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28283)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("Astaroth");
    var prop = em.getProperty("state");
    if (cm.getPlayer().getMap().getId() == 101040310) {
        if (prop == null || prop == 0) {
            if (cm.getPlayer().getParty() == null) {
                em.startInstance(cm.getPlayer());
                cm.dispose();
                return;
            }
            em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
            cm.dispose();
            return;
        }
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "阿司塔洛隱身處目前擁擠，請稍後再試"));
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getId() == 677000011) {
        cm.getPlayer().changeMap(cm.getMap(677000012), cm.getMap(677000012).getPortal(0));
        cm.dispose();
        return;
    }
    cm.sendYesNo("确定要离开#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(101040310), cm.getMap(101040310).getPortal(0));
    cm.dispose();
}
