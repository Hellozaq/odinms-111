/*
     名字：黑暗的祭壇石像
     地图：黑暗的祭壇 入口
     描述：272030300
 */

function start() {
    var em = cm.getEventManager("ArkariumAK");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        em.startInstance(cm.getPlayer());
        cm.dispose();
        return;
    }
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "黑暗的祭壇目前擁擠，請稍後再試"));
    cm.dispose();
}
