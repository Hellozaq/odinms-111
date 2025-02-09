/*
     名字：直助
     地图：城堡走廊
     描述：800040211
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
            if (status < 2) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendSimple("你是誰，如何能進到這裡來？我不想把你當作敵人，現在你最好離開。\r\n#L0##b我不想離開#l");
            break;
        case 1:
            cm.sendSimple("什麼，你還想打算繼續往裡面走？看到了嗎，擺在面前的是一條危險的道路，你能打敗他們嗎？\r\n#L0##b我想試試#l");
            break;
        case 2:
            cm.sendPrev("...不怕死的笨蛋，既然你想進去，我就放你過去好了！");
            break;
        case 3:
            cm.getPlayer().changeMap(cm.getMap(800040300), cm.getMap(800040300).getPortal(1));
            cm.dispose();
    }
}
