/*
     名字：埃德爾斯坦佈告欄
     地图：埃德爾斯坦
     描述：310000000
 */

function start() {
    if (cm.getPlayer().itemQuantity(4032783)) {
        cm.gainItem(4032783, -1);
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("海報貼在了佈告欄上"));
        Packages.server.quest.MapleQuest.getInstance(23006).forceStart(cm.getPlayer(), 0, 1);
    }
    cm.dispose();
}
