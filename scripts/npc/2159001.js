/*
     名字：烏利卡
     地图：人煙稀少的石山
     描述：931000000
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
            cm.sendNext("遲到了啦，#b#h0##k！快過來這裡！");
            break;
        case 1:
            cm.sendNextPrev("為什麼這麼慢？之前不是就說好要來這裡玩了嗎！不會是害怕了吧？", 2159002);
            break;
        case 2:
            cm.sendNextPrevS("#b我沒有害怕。");
            break;
        case 3:
            cm.sendNextPrev("真的嗎？我好害怕哦…老人家們不是有警告說不要來礦山這裡玩，有#b黑色翅膀的壞人們#k守在這裡…", 2159000);
            break;
        case 4:
            cm.sendNextPrev("所以才故意避開監視者來到這裡的啊，真是的，膽小鬼！！", 2159002);
            break;
        case 5:
            cm.sendNextPrev("但是…被罵怎麼辦？", 2159000);
            break;
        case 6:
            cm.sendNextPrev("都已經來到這裡了，還能怎麼辦，反正都會被罵，玩玩再回去吧，我們來玩捉迷藏！");
            break;
        case 7:
            cm.sendNextPrevS("#b咦？捉迷藏！");
            break;
        case 8:
            cm.sendNextPrev("真幼稚…", 2159002);
            break;
        case 9:
            cm.sendPrev("什麼幼稚！在這裡還可以玩什麼？說來聽聽啊！還有你當鬼，因為你遲到了，哈，那麼我們要躲了哦，數到十後開始找！#b#h0##k不許賴皮哦！");
            break;
        case 10:
            cm.getPlayer().changeMap(cm.getMap(931000001), cm.getMap(931000001).getPortal(1));
            cm.dispose();
    }
}
