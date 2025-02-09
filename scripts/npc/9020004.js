/*
     名字：坎特
     地图：危海中心
     描述：923040300
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 923040300) {
        cm.sendYesNo("太感動了，終於有人來救我了，附近洞穴裏的海怒斯，讓原本平靜的海洋出現了異樣的波動，所以我們要儘快去制止它。");
    }
    if (cm.getPlayer().getMap().getId() == 923040400 && cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("為了海洋的生態平衡，請消滅掉洞穴裏的海怒斯。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("海怒斯被真的被消滅掉了嗎，這個地方實在是太恐怖了，很感謝你的幫助，請收下這份值得紀念的禮物。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4001535# #t4001535# 1");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getMap().getId() == 923040300) {
            cm.getPlayer().changeMap(cm.getMap(923040400), cm.getMap(923040400).getPortal(0));
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.gainNX(2000);
        cm.addTrait("will", 26);
        cm.addTrait("charm", 26);
        cm.gainItem(4001535, 1);
        cm.getPlayer().changeMap(cm.getMap(923040000), cm.getMap(923040000).getPortal(0));
    }
    cm.dispose();
}
