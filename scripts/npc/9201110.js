/*
     名字：盜賊大師
     地图：團結的測試
     描述：610030500
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 610030500) {
        cm.sendOk("盜賊是個很吸引人也很有趣的職業。你操作的有效性取決於你學習掌握盜賊職業的程度。這包括了很多東西，當你有了一定的知識和經驗就會掌握。所以，為了最好地說明這一點，請摧毀掉盜賊專精的房間所有警惕的眼睛，並從雕像那裡取回#b原初之爪#k。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getId() == 610030000) {
        cm.sendOk("漢斯拉夫曾被稱為影子王子，是著名的盜賊之一，擅長使用短程匕首和長鏈，具備超燃的速度與致命的攻擊，讓周遭的敵人防不勝防。他的出生與成長一直都是個謎，沒有人知道他的過去。");
        cm.dispose();
        return;
    }
    var eim = cm.getPlayer().getEventInstance();
    if (cm.getPlayer().getMap().getId() == 610030530) {
        if (cm.getPlayer().getMap().getReactorByName("thief0").getState() > 0 && cm.getPlayer().getMap().getReactorByName("thief1").getState() > 0 && cm.getPlayer().getMap().getReactorByName("thief2").getState() > 0 && cm.getPlayer().getMap().getReactorByName("thief3").getState() > 0 && cm.getPlayer().getMap().getReactorByName("thief4").getState() > 0) {
            if (eim.getProperty("stage5_4") == null) { //判斷條件
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001256, 1);
                eim.setProperty("stage5_4", 1);
                cm.sendOk("請拿好象徵靈敏的主武器。");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "盜賊專精的房間主武器已經被拿到"));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                cm.dispose();
                return;
            }
            cm.sendOk("盜賊專精的房間裡的主武器，已經被取走。");
            cm.dispose();
            return;
        }
        cm.sendOk("盜賊專精的房間主武器原初之爪，只給予具備靈敏的盜賊，請摧毀房間#b所有警惕的眼睛#k，再來與我對話。");
    }
    cm.dispose();
}
