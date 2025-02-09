/*
名字:	噗洛
地圖:	前往瑞恩
描述:	200090060
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
    case  - 1:
        cm.dispose();
        return;
    case 0:
        if (status < 1) {
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
        cm.sendSimple("唉，真无聊啊……船有鲸鱼牵引着，我除了看看天空就无事可\r\n干了……反正闲着没事，想听我介绍介绍里恩吗？\r\n\r\n#b#L0#嗯，请介绍吧。#l\r\n#L1#不用，好好开船吧。#l");
        break;
    case 1:
        if (selection > 0) {
            cm.sendNext("切......凶什么凶！");
            cm.dispose();
            return;
        }
        cm.sendNext("里恩是位于冒险岛世界最大的岛屿——金银岛旁边的一个很小\r\n的岛。具体说，就是明珠港往西1分钟的船程就到了。");
        break;
    case 2:
        cm.sendNextPrev("里恩的地理位置并不靠北方，但奇怪的却是一年四季都是冰天\r\n雪地。事实上，说里恩是一座冰岛也不为过。关于气候异常的\r\n原因，有说是人为造成的……嗯。");
        break;
    case 3:
        cm.sendNextPrev("在这个冰之岛里恩上，植物很少。基本上没有能够结果的植物\r\n。对人类而言并不是很好的居住地。企鹅当然另当别论了。所\r\n以岛上基本没有什么人类。生活在里恩的人类只有一个人……");
        break;
    case 4:
        cm.sendNextPrev("不过，里恩也是充满活力的。因为到处都是为了能从冰窟里挖\r\n出什么面努力工作的企鹅们。");
        break;
    case 5:
        cm.sendPrev("#b（普洛就这样唠叨个没完，平时要无聊到一个什么程度啊......\r\n）");
        break;
    default:
        cm.dispose();
    }
}
