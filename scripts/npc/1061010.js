/*
     名字：閃耀的水晶
     地图：異次元的世界
     描述：910540500
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(211040401), cm.getMap(211040401).getPortal(0));
    cm.dispose();
}
