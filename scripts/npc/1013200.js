/*
     名字：小豬
     地图：茂盛的森林
     描述：900020100
 */

function start() {
    if (Math.abs(cm.getPlayer().getPosition().x - 1922) > 100 && cm.getPlayer().getMap().getId() == 900020100) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("與小豬的距離太遠了"));
        cm.dispose();
        return;
    }
    Packages.server.quest.MapleQuest.getInstance(22015).forceComplete(cm.getPlayer(), 0); //小豬消失
    cm.gainItem(4032449, 1);
    cm.dispose();
}
