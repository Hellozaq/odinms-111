/*
 * 小游戏制作
 * by Kodan
 */

var select;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendSimple("喂，你！我看你好像已经有点疲于狩猎了嘛！我的人生信条是\r\n享受生活，怎么样？只要能有几样道具，就可以从我这里换到\r\n可以玩小游戏的道具。来……要我怎么帮你？\r\n#b#L0#制作小游戏道具#l\r\n#b#L1#了解小游戏的介绍#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendSimple("你说你想要制作小游戏道具？小游戏不是随随便便就能进行的\r\n，如果想要进行某款小游戏就需要特定道具，你想要制作哪款\r\n小游戏道具？\r\n\r\n#b#L2#五子棋套装#l#k\r\n#b#L3#记忆大考验套装#l#k");
        } else if (selection == 1) {
            cm.sendSimple("你想要了解小游戏的介绍吗？很好！你有什么问题就问吧，你\r\n想了解哪款小游戏的介绍呢？\r\n\r\n#b#L4#五子棋#l#k\r\n#b#L5#记忆大考验#l#k");
        }
    } else if (status == 2) {
        if (selection != null)
            select = selection;

        if (select == 2) {
            cm.sendSimple("按照棋子的不同，五子棋可以分为不同的种类。你想做什么样\r\n的五子棋？\r\n#b#L6##v4080000#绿水灵/蘑菇五子棋#l#k\r\n#b#L7##v4080001#绿水灵/三眼章鱼五子棋#l#k\r\n#b#L8##v4080002#绿水灵/猪猪五子棋#l#k\r\n#b#L9##v4080003#三眼章鱼/蘑菇五子棋#l#k\r\n#b#L10##v4080004#猪猪/三眼章鱼五子棋#l#k\r\n#b#L11##v4080005#猪猪/蘑菇五子棋#l#k");
        } else if (select == 3) {
            if (!cm.haveItem(4030012, 15)) {
                cm.sendNext("怪物都会掉落制作所需要的的材料。制作#b#v4080100#记忆大考验#k需要#b15#k张#t4030012##v4030012#！");
                cm.dispose();
                return;
            } else {
                cm.gainItem(4030012, -15);
                cm.gainItem(4080100, 1);
                cm.dispose();
            }
        } else if (select == 4) {
            cm.sendOk("你和你的对手轮流把一个棋子放在桌子上，直到有人找到一种方法把连续的5个棋子放在一条线上，不管是水平的，对角线的，还是垂直的。");
            cm.dispose();
        } else if (select == 5) {
            cm.sendOk("顾名思义，记忆大考验就是在摆在桌子上的牌数中找到一对匹配的牌。当找到所有匹配对时，匹配对越多的人将赢得游戏。");
            cm.dispose();
        }
    } else if (status == 3) {
        if (selection == 6) {
            if (!cm.haveItem(4030000, 5) || !cm.haveItem(4030001, 5) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("请准备好材料。#b#v4080000#绿水灵/蘑菇五子棋#k需要#b5#k个#b#v4030000#绿水灵五目石#k和#b5#k个#b#v4030001#蘑菇五目石#k和#b1#k个#b#v4030009#围棋盘#k");
            } else {
                cm.gainItem(4030000, -5);
                cm.gainItem(4030001, -5);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080000, 1);
                cm.sendOk("#b获得了#v4080000#绿水灵/蘑菇五子棋#k。");
            }
        } else if (selection == 7) {
            if (!cm.haveItem(4030000, 5) || !cm.haveItem(4030010, 5) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("请准备好材料。#b#v4080001#绿水灵/三眼章鱼五子棋#k需要#b5#k个#b#v4030000#绿水灵五目石#k和#b5#k个#b#v4030010#三眼章鱼五目石#k和#b1#k个#b#v4030009#围棋盘#k");
            } else {
                cm.gainItem(4030000, -5);
                cm.gainItem(4030010, -5);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080001, 1);
                cm.sendOk("#b获得了#v4080001#绿水灵/三眼章鱼五子棋#k。");
            }
        } else if (selection == 8) {
            if (!cm.haveItem(4030000, 5) || !cm.haveItem(4030011, 5) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("请准备好材料。#b#v4080002#绿水灵/猪猪五子棋#k需要#b5#k个#b#v4030000#绿水灵五目石#k和#b5#k个#b#v4030011#猪猪五目石#k和#b1#k个#b#v4030009#围棋盘#k");
            } else {
                cm.gainItem(4030000, -5);
                cm.gainItem(4030011, -5);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080002, 1);
                cm.sendOk("#b获得了#v4080002#绿水灵/猪猪五子棋#k。");
            }
        } else if (selection == 9) {
            if (!cm.haveItem(4030010, 5) || !cm.haveItem(4030001, 5) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("请准备好材料。#b#v4080003#三眼章鱼/蘑菇五子棋#k需要#b5#k个#b#v4030010#三眼章鱼五目石#k和#b5#k个#b#v4030001#蘑菇五目石#k和#b1#k个#b#v4030009#围棋盘#k");
            } else {
                cm.gainItem(4030010, -5);
                cm.gainItem(4030001, -5);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080003, 1);
                cm.sendOk("#b获得了#v4080003#三眼章鱼/蘑菇五子棋#k。");
            }
        } else if (selection == 10) {
            if (!cm.haveItem(4030011, 5) || !cm.haveItem(4030010, 5) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("请准备好材料。#b#v4080004#猪猪/三眼章鱼五子棋#k需要#b5#k个#b#v4030011#猪猪五目石#k和#b5#k个#b#v4030010#三眼章鱼五目石#k和#b1#k个#b#v4030009#围棋盘#k");
            } else {
                cm.gainItem(4030011, -5);
                cm.gainItem(4030010, -5);
                cm.gainItem(4030009, -1);
                cm.gainItem(4030004, 1);
                cm.sendOk("#b获得了#v4080004#猪猪/三眼章鱼五子棋#k。");
            }
        } else if (selection == 11) {
            if (!cm.haveItem(4030011, 5) || !cm.haveItem(4030001, 5) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("请准备好材料。#b#v4080005#猪猪/蘑菇五子棋#k需要#b5#k个#b#v4030011#猪猪五目石#k和#b5#k个#b#v4030001#蘑菇五目石#k和#b1#k个#b#v4030009#围棋盘#k");
            } else {
                cm.gainItem(4030011, -5);
                cm.gainItem(4030001, -5);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080005, 1);
                cm.sendOk("#b获得了#v4080005#猪猪/蘑菇五子棋#k。");
            }
        }
        cm.dispose();
    }
}
