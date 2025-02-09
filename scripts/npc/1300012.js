/*
     名字：東邊城塔門
     地图：東邊城塔
     描述：106021400
 */

function start() {
    cm.sendSimple("移動至結婚會場入口，您要去哪裡？\r\n\r\n#L0##b消滅雪吉拉和企鵝國王三兄弟#l\r\n#L1#救出菲歐娜公主#l");
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            var em = cm.getEventManager("KingPepeAndYetis");
            var prop = em.getProperty("state");
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
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "結婚禮堂入口目前擁擠，請稍後再試"));
            cm.dispose();
            break;
        case 1:
            cm.getPlayer().changeMap(cm.getMap(106021401), cm.getMap(106021401).getPortal(1));
    }
    cm.dispose();
}
