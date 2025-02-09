var cost = 6000;
var status = 0;

function start() {
    cm.sendYesNo("你好？我是码头引导员美尔。你想离开玩具城，到其他地方去吗？这里有开往秘岛大陆天空之城站的船随时待命，马上就可以送你过去......你需要花费#b" + cost + "金币#k。你确定要购买#b开\r\n往天空之城的船票（一般）#k吗？");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        }
        if (mode == 0) {
            cm.sendNext("你一定有点事要处理，对吧？");
            cm.dispose();
            return;
        }
        if (status == 1) {
            if (cm.getMeso() >= cost && cm.canHold(4031045)) {
                cm.gainItem(4031045, 1);
                cm.gainMeso(-cost);
            } else {
                cm.sendOk("你确定你有#b" + cost + "金币#k吗？如果有的话，请检查你的其他栏是\r\n否已经满了。");
            }
            cm.dispose();
        }
    }
}
