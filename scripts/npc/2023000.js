var map = new Array(105000000, 105030000, 211000000, 220000000, 220050300, 221000000, 240000000, 300000100);
var maps = new Array(105030000, 105000000, 211040200, 220050300, 220000000, 220000000, 240030000, 220000000);
var cost = new Array(15000, 15000, 35000, 35000, 35000, 55000, 65000, 25000);

var status;
var select = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (cm.getPlayer().getMapId() == 220050300) {
            cm.sendNext("嗯...... 再考虑一下吧。我的价格很贵的！但你一定不会后悔的\r\n！");
        } else {
            cm.sendNext("嗯......再考虑一下吧。但你一定不会后悔的！");
        }
        cm.dispose();
        return;
    }
    switch (status) {
    case 0:
        for (var i = 0; i < map.length; i++) {
            if (map[i] == cm.getPlayer().getMap().getId()) {
                select = i;
                break;
            }
        }

        if (select != -1) {
            switch (cm.getPlayer().getMap().getId()) {
            case 105000000: //林中之城
                cm.sendNext("你好！我是随时可以去危险地区的危险地区快速出租车！现运\r\n营线路为#m" + map[select] + "#到#b#m" + maps[select] + "##k之间！价格为 #b" + cost[select] + " 金币#k。");
                break;
            case 105030000: //另一扇门
                cm.sendYesNo("你好！我是危险地区快速出租车。#b15000金币#k支付后，确定要\r\n移动到#b#m" + maps[select] + "##k吗？");
                break;
            case 211000000: //冰封雪域
                cm.sendNext("你好！我是勇闯神秘岛大陆危险地带的危险地区快速出租车！\r\n我的运行路线是从冰峰雪域一直到死亡之林Ⅳ，途径#b冰雪峡谷\r\nⅡ、艾琳森林和狮子王之城！乘坐费用为45000金币#k，虽然有\r\n那么点小贵，但可以轻松穿过危险区域，算下来还是很实惠的\r\n哟！");
                break;
            case 220000000: //玩具城
                cm.sendSimple("你好！我是勇闯神秘岛大陆危险地带的危险地区快速出租车！\r\n我的运行路线是从玩具城出发经过#b时间通道，最后抵达艾琳森\r\n林#k！搭乘一次的价格为#b25000金币#k，贵是贵了点，但绝对不亏\r\n！");
                break;
            case 220050300: //时间通道
                cm.sendNext("你好！我是危险地区快速出租车！现运营线路为时间通道到#b玩\r\n具城#k之间！价格为#b  35000  金币尽管有点贵，但你一定不会后\r\n悔的！#k");
                break; //点否提示：嗯...再考虑一下吧。我的价格很贵的!但你一定不会后悔的\r\n
            case 221000000: //地球防御本部
                cm.sendNext("你好！我是随时可以去危险地区的危险地区快速出租车！现运\r\n营线路为#m" + map[select] + "#到#b#m" + maps[select] + "##k之间！价格为 #b" + cost[select] + " 金币#k。");
                break;
            case 240000000: //神木村
                cm.sendNext("你好！神秘岛的危险地区快速出租车！从神木村到#b龙林入口，\r\n龙之巢穴入口！龙林入口#k为55000金币，#b龙之巢穴入口#k为20000\r\n0金币。虽然有些贵，但是可以快速通过危险地区，是非常划\r\n算的哦!");
                break;
            case 300000100: //艾琳森林
                cm.sendNext("你好！我是随时可以去神秘岛大陆危险地区的危险地区快速出\r\n租车！现运营线路为从小森林到#b玩具城、水峰雪域#k之间！价格\r\n为#b55000 金币#k尽管有点贵，但你一定不会后悔的！");
                break;
            default:
                //cm.sendNext("你好！我是随时可以去危险地区的危险地区快速出租车！现运\r\n营线路为#m" + map[select] + "#到#b#m" + maps[select] + "##k之间！价格为 #b" + cost[select] + " 金币#k。");
                break;
            }
        } else {
            cm.sendOk("很抱歉，你不在可供使用超高速計程車的地點。");
            cm.dispose();
        }
        break;
    case 1:
        switch (cm.getPlayer().getMapId()) {
        case 220000000: //玩具城
            cm.sendSimple("#b25000金币#k支付后，想要移动到什么地区呢？#b\r\n#L0#时间通道#l\r\n#L1#艾琳森林#l");
            break;
        case 300000100: //艾琳森林
            cm.sendSimple("#b55000金币#k支付后，想要移动到什么地区呢？#b\r\n#L0#玩具城#l\r\n#L1#冰封雪域#l");
            break;
        case 211000000: //冰封雪域
            cm.sendSimple("支付#b45000金币#k可前往任意地图，是否移动？#b\r\n#L0#冰雪峡谷Ⅱ#l\r\n#L1#艾琳森林#l\r\n#L2#狮子王之城#l\r\n#L3#死亡之林Ⅳ#l");
            break;
        case 240000000: //神木村
            cm.sendSimple("您想移动至哪个地区呢？#b\r\n#L0#龙林入口（55000金币）#l\r\n#L1#龙之巢穴入口（200000金币） #l");
            break;
        default:
            if (cm.getPlayer().getMapId() == 105030000) {
                cm.getPlayer().changeMap(cm.getMap(maps[select]), cm.getMap(maps[select]).getPortal(select != 1 ? 0 : 1));
                cm.gainMeso(-cost[select]);
            } else {
                cm.sendYesNo("#b" + cost[select] + "金币#k支付后，要移动到#b#m" + maps[select] + "##k吗？");
            }
            break;
        }
        break;
    case 2:
        if (cm.getPlayer().getMapId() == 220000000) {
            if (selection == 0) { //时间通道
                maps[select] = 220050300;
                cm.gainMeso(-25000);
            } else if (selection == 1) { //艾琳森林
                maps[select] = 300000100;
                cm.gainMeso(-25000);
            }
        } else if (cm.getPlayer().getMapId() == 300000100) {
            if (selection == 0) { //玩具城
                maps[select] = 220000000;
                cm.gainMeso(-55000);
            } else if (selection == 1) { //冰封雪域
                maps[select] = 211000000;
                cm.gainMeso(-55000);
            }
        } else if (cm.getPlayer().getMapId() == 211000000) {
            if (selection == 0) { //冰雪峡谷Ⅱ
                maps[select] = 211040200;
                cm.gainMeso(-45000);
            } else if (selection == 1) { //艾琳森林
                maps[select] = 300000100;
                cm.gainMeso(-45000);
            } else if (selection == 2) { //狮子王之城
                maps[select] = 211060000;
                cm.gainMeso(-45000);
            } else if (selection == 3) { //死亡之林Ⅳ
                maps[select] = 211041400;
                cm.gainMeso(-45000);
            }
        } else if (cm.getPlayer().getMapId() == 240000000) {
            if (selection == 0) { //龙林入口
                maps[select] = 240030000;
                cm.gainMeso(-55000);
            } else if (selection == 1) { //龙之巢穴入口
                maps[select] = 240040500;
                cm.gainMeso(-200000);
            }
        } else if (cm.getPlayer().getMapId() ==  220050300) {
                maps[select] = 220000000; //玩具城
                cm.gainMeso(-35000);
        } else if (cm.getPlayer().getMapId() ==  105000000) {
                maps[select] = 105030000; //另一扇门
                cm.gainMeso(-15000);
        }
        if (cm.getPlayer().getMeso() < cost[select]) {
            cm.sendNext("你的金币好像不够。非常抱歉，不支付金币的话，是不能使用\r\n出租车的。继续努力打猎，获取金币后再来吧。");
            cm.dispose();
            return;
        }
        cm.getPlayer().changeMap(cm.getMap(maps[select]), cm.getMap(maps[select]).getPortal(select != 1 ? 0 : 1));
        //cm.gainMeso(-cost[select]);
        cm.dispose();
        break;
    }
}
