/*
     名字：約翰
     地图：受冰詛咒的平原
     描述：932000300
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("不要被它騙了，這一切都是謊言，請消滅掉這個冰人。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("很感謝你的幫助，消滅掉了可怕的冰人，請收下這份值得紀念的禮物。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4001529# #t4001529# 1");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.gainItem(4001529, 1);
        cm.getPlayer().changeMap(cm.getMap(932000400), cm.getMap(932000400).getPortal(0));
    }
    cm.dispose();
}
