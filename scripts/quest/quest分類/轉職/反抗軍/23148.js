/*
     名字：下結論時
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            if (qm.getMap(931000660).getCharacters().size() > 0) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "秘密廣場目前擁擠，請稍後再試"));
                qm.dispose();
                return;
            }
            qm.dispose();
            Packages.server.quest.MapleQuest.getInstance(23148).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(931000660), qm.getMap(931000660).getPortal(0));
    }
}
