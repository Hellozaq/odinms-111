/*
     名字：弓箭手大師
     地图：團結的測試
     描述：610030500
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 610030500) {
        cm.sendOk("弓箭手在遠距離與敵人作戰，是環境的主人，他們能合理運用各種地形，將敵人控制在自己所操控的範圍內。在弓箭手專精的房間有一種強大的生物正在等待著你的來臨，請消滅掉裏面所有怪物，並從雕像手中取回#b先祖之弓#k。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getId() == 610030000) {
        cm.sendOk("雷利克是唯一已知的神聖弓箭手，是古老的守護者城堡最著名的英雄之一，據說他得到一個強大的女神的祝福，使他在長距離攻擊目標時非常精確，所以畏懼他的敵人都只能與他保持距離。");
        cm.dispose();
        return;
    }
    var eim = cm.getPlayer().getEventInstance();
    if (cm.getPlayer().getMap().getId() == 610030540) {
        if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
            if (eim.getProperty("stage5_3") == null) { //判斷條件
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001258, 1);
                eim.setProperty("stage5_3", 1);
                cm.sendOk("請拿好象徵精明主武器。");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "弓箭手專精的房間主武器已經被拿到"));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                cm.dispose();
                return;
            }
            cm.sendOk("弓箭手專精的房間裡的武器已經找到了。");
            cm.dispose();
            return;
        }
        cm.sendOk("弓箭手專精的房間主武器先祖之弓，只給予具備精明的獵手，請消滅房間裡#b所有的怪物#k，再來與我對話。");
    }
    cm.dispose();
}
