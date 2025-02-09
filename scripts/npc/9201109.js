/*
     名字：魔法大師
     地图：團結的測試
     描述：610030500
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 610030500) {
        cm.sendOk("法師們用神秘的咒語摧毀他們的敵人。雖然他們使用強大的攻擊性法術，但法師其實護甲單薄防禦低，使得他們特別容易受到近距離攻擊。精明的法師會精心使用法術將他們的敵人限制在一定距離或者控制在適當的位置。因此，法師專精的房間是一個扭曲的禁室，請靈活運用自己的能力消滅房間裡所有的怪物，並從法師雕像中拿回#b起源之杖#k。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getId() == 610030000) {
        cm.sendOk("瑪甘娜這個名字永遠被人們記住，只因為她是一個非常成功的法師，她的心靈魔法、心靈感應已經達到登峰至極的地步。除此之外，她還是精通所有魔法的精英法師之一，據說最後一次見到她，是在抵禦入侵克拉奇亞軍隊的戰場上。");
        cm.dispose();
        return;
    }
    var eim = cm.getPlayer().getEventInstance();
    if (cm.getPlayer().getMap().getId() == 610030521) {
        if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
            if (eim.getProperty("stage5_2") == null) { //判斷條件
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001257, 1);
                eim.setProperty("stage5_2", 1);
                cm.sendOk("請拿好象徵智慧的主武器。");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "法師專精的房間主武器已經被拿到"));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                cm.dispose();
                return;
            }
            cm.sendOk("法師專精的房間裡的主武器，已經被取走。");
            cm.dispose();
            return;
        }
        cm.sendOk("法師專精的房間主武器起源之杖，只給予具備智慧的法師，請消滅房間裡#b所有的怪物#k，再來與我對話。");
    }
    cm.dispose();
}
