/*
     名字：萬能傳送點
     地图：維多利亞港
     描述：104000000
 */

var map = [980010000, 925020000, 980000000, 980030000, 923020000, 926010000, 910320000, 209000000, 950100000, 910010500, 910340700, 221023300, 300030100, 200080101, 251010404, 261000011, 211000002, 240080000, 674030100, 682000000, 980040000, 923040000, 921160000, 932000000, 502029000];

var y = [3, 4, 4, 4, 0, 4, 2, 0, 9, 1, 0, 2, 1, 1, 2, 0, 0, 2, 0, 0, 0, 4, 2, 1, 0];

var text = "";

function start() {
    var level = cm.getPlayer().getLevel();
    if (level > 10) {
        //text += "#0#納希競技大會";
    }
    if (level >= 25) {
        text += "#1#武陵道場";
    }
    if (level >= 30) {
        text += "#2#怪物擂台赛1";
    }
    if (level >= 50) {
        text += "#3#怪物擂台赛2";
    }
    if (level >= 60) {
        text += "#4#霧海幽靈船";
    }
    if (level >= 40) {
        text += "#5#奈特的金字塔";
    }
    if (level >= 25 && level <= 200) {
        text += "#6#廢棄的捷運月臺";
    }
    //text += "#7#幸福村";
    text += "#8#黃金寺院";
    if (level >= 10) {
        text += "#9#月妙的年糕";
    }
    if (level >= 20) {
        text += "#10#第一次同行";
    }
    if (level >= 30) {
        text += "#11#次元裂縫";
    }
    if (level >= 40) {
        text += "#12#毒霧森林";
    }
    if (level >= 50) {
        text += "#13#女神的痕迹";
    }
    if (level >= 60) {
        text += "#14#海盜船";
    }
    if (level >= 70) {
        text += "#15#羅密歐與茱麗葉";
    }
    if (level >= 70) {
        text += "#16#侏儒怪皇帝的復活";
    }
    if (level >= 100) {
        text += "#17#禦龍魔";
    }
    if (level >= 30) {
        //text += "#18#叛徒房間的入口";
    }
    if (level >= 50) {
        //text += "#19#鬧鬼宅邸外部";
    }
    if (level >= 10) {
        //text += "#20#魔女塔";
    }
    if (level >= 50) {
        text += "#21#陷入危險的坎特";
    }
    if (level >= 50) {
        text += "#22#逃脫";
    }
    if (level >= 50) {
        text += "#23#冰騎士的詛咒";
    }
    if (level >= 30) {
        //text += "#24#外星基地";
    }
    cm.askMapSelection(text);
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
        cm.getPlayer().changeMap(cm.getMap(map[selection]), cm.getMap(map[selection]).getPortal(y[selection]));
    }
    cm.dispose();
}
