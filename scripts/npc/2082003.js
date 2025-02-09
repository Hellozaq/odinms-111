function start() {
    cm.sendSimple("如果有翅膀，就可以到达那个地方。但是仅仅有翅膀是不够的，如果要在比刀还锋利的风中飞行，还需要有坚硬的鳞片。知道回来的方法的只有我一个……你如果要到那里去，我会帮你变身。不管你现在的样子是什么，在这一瞬间都会变\r\n成#b龙#k……\r\n\r\n #L0##b我想变身为龙。#k#l");
}

function action(m, t, s) {
    if (m > 0) {
        cm.useItem(2210016);
        cm.warp(200090500, 0);
    }
    cm.dispose();
}
