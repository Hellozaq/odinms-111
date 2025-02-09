/*
     名字：休曼諾伊德A
     地图：瑪迦提亞城
     描述：261000000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3335)).getStatus() != 1 || cm.getPlayer().itemQuantity(4031695)) {
        cm.sendOk("我的感覺是對的嗎，還是機器出錯了。");
        cm.dispose();
        return;
    }
    if (cm.getMap(926120300).getCharacters().size() < 1) {
        cm.getMap(926120300).resetFully();
        cm.getPlayer().changeMap(cm.getMap(926120300), cm.getMap(926120300).getPortal(4));
        cm.getPlayer().startMapTimeLimitTask(300, cm.getMap(261000000));
        cm.dispose();
        return;
    }
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "雪原玫瑰生長的地方目前擁擠，請稍後再試"));
    cm.dispose();
}
