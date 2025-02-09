/*
     名字：守衛兵
     地图：黃金寺廟
     描述：950100000
 */

var maxp = 1;

function start() {
    map = cm.getPlayer().getMap().getId();
    var chat = "歡迎來到地精廟入口，裏面的怪物是非常兇悍的哦！#b";
    chat += "\r\n#L0#Goblin Temple 1 - Blue Goblin(" + (map == 950100000 ? "2200 HP/180 EXP" : "37000 HP/1264 EXP") + ")(" + cm.getMap(map + 500 + (0 * 100)).getCharacters().size() + "/" + maxp + ")";
    chat += "\r\n#L1#Goblin Temple 2 - Red Goblin(" + (map == 950100000 ? "3800 HP/256 EXP" : "21000 HP/793 EXP") + ")(" + cm.getMap(map + 500 + (1 * 100)).getCharacters().size() + "/" + maxp + ")";
    chat += "\r\n#L2#Goblin Temple 3 - Stone Goblin(" + (map == 950100000 ? "8000 HP/428 EXP" : "10000 HP/444 EXP") + ")(" + cm.getMap(map + 500 + (2 * 100)).getCharacters().size() + "/" + maxp + ")";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().itemQuantity(4001431) || cm.getPlayer().itemQuantity(4001432)) {
            if (cm.getMap(map + 500 + (selection * 100)).getCharacters().size() > 0) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "地精廟區域目前擁擠，請稍後再試"));
                cm.dispose();
                return;
            }
            cm.gainItem(4001431, cm.getPlayer().itemQuantity(4001432) ? 0 : -1);
            cm.getPlayer().changeMap(cm.getMap(map + 500 + (selection * 100)), cm.getMap(map + 500 + (selection * 100)).getPortal(1));
            cm.dispose();
            return;
        }
        cm.sendOk("你需要一張#v4001431##b#t4001431##k才能进入，請到導遊處購買。");
    }
    cm.dispose();
}
