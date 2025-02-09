/*
     名字：製作馬鞍
     地图：動物園
     描述：230000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 3) {
                qm.dispose();
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
            qm.sendNext("嗯……真是只奇特的蜥蜴。長得好像龍一樣。但是世界上應該沒人可以騎龍吧。你的騎寵還真是特別。");
            break;
        case 1:
            qm.sendNextPrev("我之前見過很多騎豬豬、狼或者鳥的人，那些生物的馬鞍尺寸我全都知道。但是這個奇特的生物的尺寸，我就不太清楚了。讓我先來量一下。");
            break;
        case 2:
            qm.sendNextPrevS("坎特仔細地測量寶貝龍的腰圍、翅膀間隔、頭部大小和尾巴周長等等。但是為什麼連爪子的長度都要量呢？為什麼要掰開嘴巴看呢？");
            break;
        case 3:
            qm.sendAcceptDecline("嗯…和其它的馬鞍的尺寸完全不一樣，如果你想騎牠的話，#b馬鞍必須訂做#k才行。可以嗎？");
            break;
        case 4:
            qm.sendPrev("製作馬鞍需要50個#b#t4000592##k和1個#b#t4032474##k，以及手續費1000萬楓幣，你可以從上層的緞帶肥肥之間的菇菇寶貝屋之門進去，就可以找到材料。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(22404).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
