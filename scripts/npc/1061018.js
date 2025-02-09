/*
     名字：武英
     地图：巴羅古的墳墓
     描述：105100300
 */

function start() {
    mob = (cm.getPlayer().getMap().getId() == 105100300 && cm.getPlayer().getMap().getMonsterById(8830011) != null && cm.getPlayer().getMap().getMonsterById(8830007) == null);
    mob1 = (cm.getPlayer().getMap().getId() == 105100400 && cm.getPlayer().getMap().getMonsterById(8830004) != null && cm.getPlayer().getMap().getMonsterById(8830000) == null);
    cm.sendYesNo((mob == true || mob1 == true) ? "哇！看來我低估了你們的能力，居然打敗了巴羅古，準備好去探尋它的寶庫了嗎？" : "膽小鬼，你打算現在就離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        map = (mob == true || mob1 == true) ? cm.getPlayer().getMap().getId() == 105100300 ? 105100301 : 105100401 : 105100100;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
    }
    cm.dispose();
}
