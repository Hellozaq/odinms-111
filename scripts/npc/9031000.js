var status = -1;

function action(c, b, a) {
    if (c == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext('想了解专业技术啊……那我来给你简单介绍一下。现在这座村\r\n庄有#b采药、采矿、装备制作、饰品制作和炼金术#k一共五位工匠\r\n。');
    } else if (status == 1) {
        cm.sendNext('采集分为采药和采矿两种，你可以通过斯塔切和诺布学习这两\r\n种采集技术。');
    } else if (status == 2) {
        cm.sendNext('制作一共有装备制作、饰品制作和炼金术三种，可以通过埃珅\r\n、梅兹和卡利安学习。');
    } else if (status == 3) {
        cm.sendNext('不过为了制作装备和制作饰品需要用到采矿技术，为了学习炼\r\n金术必须学会采集技术。');
    } else if (status == 4) {
        cm.sendPrev('匠人街还为学习采药和采矿的人准备了采集农场，不过别忘了\r\n，为了进入采集农场，需要先去消灭#b1000只等级范围怪物。#k\r\n消灭的怪物数里还可以在专业技术界面中查看，你可以留作参\r\n考哦。');
        cm.dispose();
    }
}

function start() {
    status = -1;
    action(1, 0, 0);
}