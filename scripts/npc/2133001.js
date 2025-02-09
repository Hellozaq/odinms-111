/*
     名字：艾靈
     地图：毒霧森林
     描述：930000000
 */

var map = [930000000, 930000100, 930000200, 930000600, 930000700];

var Text = ["非常感謝你們來到這裏，幫助處理毒霧森林的狀況，通過入口，將會進入危險區域，所以請做好準備。",
    "中毒的遠古木妖已經佔領了這個地區，我們必須消滅所有這些被污染的怪物才能繼續前進。",
    "一根大刺藤擋住了前面的路，為了消除這個障礙，我們必須找到稀釋的毒液以阻止過度生長的脊藤。然而，天然狀態下的毒藥是不能處理的，因為它太濃了，我們需要在附近#b泉水#k那邊稀釋。",
    "艾靈森林問題的根源就在這裡了，把得到的魔法石放到祭壇上，召喚出怪物，並消滅掉。",
    "感謝你們的幫助，毒霧森林得到了淨化。"];

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 1) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            var eim = cm.getPlayer().getEventInstance();
            for (var i = 0; i < map.length; i++)
                if (cm.getPlayer().getMap().getId() == map[i]) {
                    cm.sendOk(Text[i]);
                    cm.dispose();
                    return;
                }
            if (cm.getPlayer().getMap().getId() == 930000300) {
                cm.sendNext("終於看到你了，我還擔心你會在濃霧森林中迷失方向，現在你可以繼續深入樹林探索。");
            }
            if (cm.getPlayer().getMap().getId() == 930000400) {
                if (eim.getProperty(cm.getPlayer().getName()) == null) { //判斷組員領取
                    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                        cm.dispose();
                        return;
                    }
                    cm.sendOk("附近中毒的小精靈它們並不是普通的怪物，它們生長的速度很快，#b普通的攻擊和魔法攻擊都無效#k。請拿好這10個#v2270004#，淨化附近中毒的小精靈，當怪物的生命值降低時，使用淨化之珠就能捕捉它們。");
                    eim.setProperty(cm.getPlayer().getName(), 1); //記錄領取物品的組員
                    cm.gainItem(2270004, 10);
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().itemQuantity(4001169) < 10) {
                    cm.sendOk("請淨化這些被污染的怪物，整個小組需要集齊10個#b#z4001169##k交給我，當怪物的生命值降低時，使用淨化之珠就能捕捉它們。");
                    cm.dispose();
                    return;
                }
                cm.sendNext("做的非常好，整個小組收集了10個怪物珠，我們現在可以進入森林的更深處了。");
            }
            break;
        case 1:
            if (cm.getPlayer().getMap().getId() == 930000300) {
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "有一位組員通過了濃霧森林，還有" + (cm.getMap(930000300).getCharacters().size() - 1) + "名組員迷失在濃霧中"));
                cm.getPlayer().changeMap(cm.getMap(930000400), cm.getMap(930000400).getPortal(0));
                cm.dispose();
                return;
            }
            cm.gainItem(4001169, -10);
            cm.warpParty(930000500, 0);
            //cm.getPlayer().changeMap(cm.getMap(930000500), cm.getMap(930000500).getPortal(0));
            cm.dispose();
    }
}
