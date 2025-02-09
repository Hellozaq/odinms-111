/*
     名字：瑞恩
     地图：楓葉村
     描述：1000000
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
            cm.sendNext("这里是位于彩虹岛东北部的叫#b冒险家修炼场入口#k的村落......你\r\n已经知道彩虹岛是新手练习的地方吧？这里只出现比较弱的怪\r\n兽，所以你放心吧。");
            break;
        case 1:
            cm.sendNextPrev("如果你希望变得更强大，就去#b南港#k，在那里乘船去#b金银岛#k。那\r\n个岛的规模很大，这里可是比不上得。");
            break;
        case 2:
            cm.sendPrev("听说在金银岛可以学到专门的职业技能。好象是叫#b勇士部落#k来\r\n着......？  有人说那里还有非常荒凉的高原村庄，在那里有很多\r\n战士。是高原......到底是怎么样的地方呢？");
            break;
        default:
            cm.dispose();
    }
}
