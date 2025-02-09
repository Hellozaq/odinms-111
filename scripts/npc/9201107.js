/*
     名字：戰士大師
     地图：團結的測試
     描述：610030500
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 610030500) {
        cm.sendOk("戰士是最驍勇善戰的勇士，性格堅韌和驕傲，內心燃燒著對勝利的渴望，他們在戰場中始終衝鋒於第一線，不屈的意志能讓對手心懷恐懼。因此，戰士專精的房間是一個殘酷的場所，請擊敗裡面的怪物，到達戰士雕像，並取回#b大師之劍#k。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getId() == 610030000) {
        cm.sendOk("德夫裡森家族是傳奇的英雄家族，是風暴戰士的創始人。這個家庭是獨一無二的，因為每個兒子或女兒都繼承了他們祖先的全部戰鬥技巧。一個擁有戰鬥經驗豐富的戰士在戰鬥中切換著姿態進行著多種風格的戰鬥時，戰士就是戰爭中的藝術家。");
        cm.dispose();
        return;
    }
    var eim = cm.getPlayer().getEventInstance();
    if (cm.getPlayer().getMap().getId() == 610030510) {
        if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
            if (eim.getProperty("stage5_1") == null) { //判斷條件
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001259, 1);
                eim.setProperty("stage5_1", 1);
                cm.sendOk("請拿好象徵勇氣的主武器。");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "戰士專精的房間主武器已經被拿到"));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                cm.dispose();
                return;
            }
            cm.sendOk("戰士專精的房間裡的主武器，已經被取走。");
            cm.dispose();
            return;
        }
        cm.sendOk("戰士專精的房間主武器大師之劍，只給予具備無畏勇氣的戰士，請消滅房間裡#b所有的怪物#k，再來與我對話。");
    }
    cm.dispose();
}
