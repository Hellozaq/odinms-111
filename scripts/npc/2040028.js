

var havePendulum = false;
var complete = false;
var inQuest = false;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else if (mode == 0 && status == 1) {
        cm.sendNext("我就知道你会继续做。要是开始了，就不要放弃，做到最后，\r\n这才是重要的嘛！那请你赶紧去找出并击碎一个稍微不同的其\r\n它木偶房，找出#b钟摆#k拿回来给我吧。");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (cm.haveItem(4031094)) {
        if (status == 0) {
            cm.sendNext("哦~！你找到了不一样的娃娃之家，并把它打碎，找到了#b表锤#k\r\n。真是太了不起了。有了它的话，玩具城时间塔就能正常运转\r\n了。很好！你为玩具城付出了这么多努力，我要送你一件好礼\r\n物。在这之前，请你先到背包消耗栏中确认一下有没有一格以\r\n上的空格。");
        } else if (status == 1) {
            cm.sendNext("怎么样？你收到#b蓝色药丸#k 100个了吧！谢谢你如此帮我。由于\r\n你的帮助，玩具城钟塔现在正常运作，其它世界的怪物也好像\r\n消失了。那我送你到外面吧!请慢走~！");
        } else if (status == 2) {
            cm.completeQuest(3230);
            cm.gainMeso(300000);
            cm.gainExp(2400);
            cm.gainItem(4031094, -1);
            cm.gainItem(2000010, 100);
            complete = true;
            cm.warp(221023200, 0);
            cm.dispose();
        }
    } else {
        if (status == 0) {
            cm.sendSimple("您好。我是看守这个房间的#b玩具兵马可#k。里面有几个木偶房，\r\n找出并击碎其中一个稍微不同的木偶房，请找回原先是玩具城\r\n钟塔零件的#b钟摆#k。只要在指定时间内找出来给我就可以了。另\r\n外，毫不相干的木偶房破碎，你将被送到外面，要小心哦。请\r\n送到\r\n#L0##b外面吧。#k#l");
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendYesNo("哦呵......你是说在这里放弃吗？好….可以把你送到外面，但是\r\n重新开始时，由于木偶房的位置改变，可能需要重新调查。怎\r\n么样，现在还是要到外面去吗？");
            }
        } else if (status == 2) {
            if (mode == 1) { // 用户选择是
                cm.warp(221023200, 0);
            }
            cm.dispose();
        }
    }
}
