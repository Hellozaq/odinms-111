/*
     名字：寶貝龍
     地图：聯盟會議場
     描述：913050010
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
    switch (status) {
        case 0:
            cm.sendNext("噢噢噢噢，太帥了！太帥了！太帥了！這是歷史性的時刻！真讓人感動！好的！作為世界上唯一的歐尼斯龍，我要好好表現一下！");
            break;
        case 1:
            cm.sendPrev("主人～！我們去拍張紀念照吧，怎麼樣？！");
            break;
        case 2:
            cm.dispose();
    }
}
