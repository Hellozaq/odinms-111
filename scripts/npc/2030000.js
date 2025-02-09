/**
 Jeff - El Nath : El Nath : Ice Valley II (211040200)
 **/

var status = 0;

function start() {
    if (cm.haveItem(4031450)) {
        cm.warp(921100100, 0);
        cm.dispose();
    } else {
        status = -1;
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0 && cm.getPlayerStat("LVL") >= 50) {
        cm.sendNext("做一个冒险的决定是很不容易的。如果你以后改变了想法再来\r\n找我。守卫在这里是我的使命。");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("你好像要继续往深处走嘛......你可要考虑清楚哦。据说深处有\r\n很多很可怕的怪物，曾经有数十位勇士闯了进去，但没有一个\r\n人回来……从此再也没有人敢进去了。不管你准备多么充分,\r\n千万不要冒然行动啊。");
    } else if (status == 1) {
        if (cm.getPlayerStat("LVL") >= 50) {
            cm.sendYesNo("劝你还是打消这个念头吧，我不想再看到有人......  你执意要\r\n进去？好吧？让我看看你的资质。嗯~似乎还不错。你确定要\r\n进入吗？");
        } else {
            cm.sendPrev("如果你想去，我建议你改变主意。但如果你真的想进去...我只是让那些足够强壮的人在那里活着。我不想看到其他人死去。我看看。。。嗯。。。你还没有达到50级。我不能让你进去，算了吧。");
        }
    } else if (status == 2) {
        if (cm.getPlayerStat("LVL") >= 50) {
            cm.warp(211040300, 5);
        }
        cm.dispose();
    }
}
