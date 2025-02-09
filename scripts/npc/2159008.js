/*
     名字：須勒
     地图：人煙稀少的石山
     描述：931000020
 */

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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    if (cm.getPlayer().getMap().getId() != 931000020) {
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            cm.sendNext("哼，好小子，膽敢給我逃跑？");
            break;
        case 1:
            cm.sendNextPrevS("#b啊！被發現了！");
            break;
        case 2:
            cm.sendNextPrev("不要掙扎了快投降吧，實驗者想要去哪裡…咦？旁邊那個小子，你不是實驗者嘛？你是什麼？村莊的人？");
            break;
        case 3:
            cm.sendNextPrevS("#b怎麼樣！我是埃德爾斯坦的居民！");
            break;
        case 4:
            cm.sendNextPrev("…小鬼頭們，說了幾次叫你們不要靠近礦山，聽不懂是吧？笨居民…沒辦法，不能讓你回到村莊亂說有關實驗室的事情，要把你抓起來。");
            break;
        case 5:
            cm.sendNextPrevS("#b什麼？誰說要乖乖地給你抓？");
            break;
        case 6:
            cm.sendNextPrev("不知好歹…看你可以囂張到什麼時後？");
            break;
        case 7:
            cm.sendNextPrevS("#b(該怎麼辦？好像打不贏！)");
            break;
        case 8:
            cm.sendNextPrev("我要建議傑利麥勒給你做更强的實驗，呼呼…乖乖的投降吧！");
            break;
        case 9:
            cm.sendNextPrev("住手！", 2159010);
            break;
        case 10:
            cm.getPlayer().changeMap(cm.getMap(931000021), cm.getMap(931000021).getPortal(0));
            cm.dispose();
    }
}
