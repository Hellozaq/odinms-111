/*
     名字：桑克斯
     地图：楓之港
     描述：2000000
 */

var cost = 100;

function start() {
    if (cm.getPlayer().itemQuantity(4031801))
        cm.sendYesNo("冒險者，這艘船將前往#m104000000#，既然你有#b#v4031801#推薦信#k，我不會收你任何的費用。坐好，旅途中可能會有點動盪！");
    else
        cm.sendYesNo("冒險者，搭上了這艘船，你可以前往更大的大陸冒險。只要給我#b" + cost + "#k楓幣，我會帶你去#b#m104000000##k。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (!cm.getPlayer().itemQuantity(4031801)) {
            if (cm.getPlayer().getLevel() > 6) {
                if (cm.getPlayer().getMeso() > cost) {
                    cm.gainMeso(-cost);
                    cm.getPlayer().changeMap(cm.getMap(2010000), cm.getMap(2010000).getPortal(0));
                    cm.dispose();
                    return;
                }
                cm.sendOk("你都沒帶#b楓幣#k，你說你想搭免費的船？你真是個怪人。");
                cm.dispose();
                return;
            }
            cm.sendOk("你至少要達到#b7等級#k，我才能讓你乘船到#b#m104000000##k囉！");
            cm.dispose();
            return;
        }
        cm.gainItem(4031801, -1);
        cm.getPlayer().changeMap(cm.getMap(2010000), cm.getMap(2010000).getPortal(0));
    }
    cm.dispose();
}
