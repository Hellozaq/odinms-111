/*
     名字：龍魔導士
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
            cm.sendNext("哇～看這些人。大家好像都很厲害的樣子。那邊的人看上去也很強。雖然在射手村的時候不知道，但在這裡一看，赫麗娜好像也很厲害的樣子。");
            break;
        case 1:
            cm.sendPrev("我可以參加這樣的盛會嗎？雖然有點可怕，但是沒關係。");
            break;
        case 2:
            cm.dispose();
    }
}
