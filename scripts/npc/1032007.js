var status = 0;
var cost = 5000;

function start() {
    cm.sendYesNo("你好？我是码头售票员。你想离开金银岛，到其他地方去吗？这里去往天空之城的船每15分钟一次，需要花费#b" + cost + "金币#k购买#b#t4031045##k，确定要购买吗？");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendNext("你一定有事要处理，对吧？");
            cm.dispose();
            return;
        }
        status++;
        if (status == 1) {
            if (cm.getMeso() >= cost && cm.canHold(4031045)) {
                cm.gainItem(4031045, 1);
                cm.gainMeso(-cost);
                cm.dispose();
            } else {
                cm.sendOk("你确定吗 #b" + cost + " 金币#k？如果是这样的话，我建议你检查一下\r\n你的背包库存，看看是否已经满了。");
                cm.dispose();
            }
        }
    }
}
