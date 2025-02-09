/*
名字:	移動小幫手
地圖:	碼頭&amp;lt;前往桃花仙境&gt;
描述:	200000141
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
        if (status < 1 && type < 3) {
            cm.sendNext("改变想法随时跟我搭话吧。");
            cm.dispose();
            return;
        }
        if (status < 2 && type < 3) {
            cm.sendNext("想好了再跟我搭话吧。");
            cm.dispose();
            return;
        }
        if (status < 3) {
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
        if (cm.getPlayer().getMap().getId() == 200000141) {
            cm.sendSimple("你好，冒险家。旅途愉快吗？我最近在为没有翅膀的旅客提供\r\n交通服务，你感兴起吗？只要你不做危险行动从半空中掉下去\r\n，只需30秒即可安全抵达目的地。来，选择你想去的地方吧。\r\n#L0##b武陵（1500金币）#l");
        }
        if (cm.getPlayer().getMap().getId() == 250000100) {
            cm.sendSimple("你好，冒险家。旅途愉快吗？你不像我自带翅膀，旅行一定很\r\n不方便吧。我最近在为没有翅膀的旅客提供交通服务，你感兴\r\n趣吗？来，选择你想去的地方吧。对了，去天空之城大约需要\r\n30秒时间。\r\n#L0##b天空之城（1500金币）#l\r\n#L1#百草堂（500金币）#l");
        }
        if (cm.getPlayer().getMap().getId() == 251000000) {
            cm.sendYesNo("你好吗，冒险家？旅行愉快吗？我可以帮助没有翅膀的人移动\r\n到#b武陵#k，你想去吗？虽然必须像坐船一样坐着，但是移动速度\r\n比船快得多。只要支付#b500 金币#k，就能方便地移动。");
        }
        break;
    case 1:
        if (cm.getPlayer().getMap().getId() == 251000000) {
            if (cm.getPlayer().getMeso() > 500) {
                cm.gainMeso(-500);
                cm.getPlayer().changeMap(cm.getMap(250000100), cm.getMap(250000100).getPortal(0));
                cm.dispose();
                return;
            }
            cm.sendNext("你有足够的金币吗？");
            cm.dispose();
            return;
        }
        if (selection == 0) {
            if (cm.getPlayer().getSkillLevel(80001027) != 1 && cm.getPlayer().getSkillLevel(80001028) != 1) {
                if (cm.getPlayer().getMeso() > 1500) {
                    cm.gainMeso(-1500);
                    cm.getPlayer().changeMap(cm.getMap(cm.getPlayer().getMap().getId() == 250000100 ? 200090310 : 200090300), cm.getMap(cm.getPlayer().getMap().getId() == 250000100 ? 200090310 : 200090300).getPortal(0));
                    cm.getPlayer().startMapTimeLimitTask(30, cm.getMap(cm.getPlayer().getMap().getId() == 200090310 ? 200000141 : 250000100));
                    cm.dispose();
                    return;
                }
                cm.sendNext("你有足够的金币吗？");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMap().getId() == 200000141) {
                cm.sendSimple("你拥有可以在天空之路旅行的飞机哪。你可以坐着这个飞机去\r\n武陵哦，要试试吗？不过，使用天空之路会消耗5000金币......\r\n\r\n#b#L0#乘坐飞机。#r(5000金币)#l\r\n#L1##b坐船。#l");
            }
            if (cm.getPlayer().getMap().getId() == 250000100) {
                cm.sendSimple("你有可以在天上飞的飞机啊。你可以乘坐飞机到达天空之城。\r\n怎么样？但是飞行需要支付5000金币...... \r\n\r\n#b#L0#乘坐飞机。#r(5000金币)#l\r\n#L1##b乘船。#l");
            }
        }
        if (selection == 1) {
            cm.sendYesNo("要向#b#m251000000##k移动吗？只要途中不做出危险的动作掉下去，很\r\n快就能达到，价钱是#b500金币。#k");
        }
        select = selection;
        break;
    case 2:
        if (select == 1) {
            if (cm.getPlayer().getMeso() > 500) {
                cm.gainMeso(-500);
                cm.getPlayer().changeMap(cm.getMap(251000000), cm.getMap(251000000).getPortal(0));
                cm.dispose();
                return;
            }
            cm.sendNext("看来你没有足够的金币。");
            cm.dispose();
            return;
        }
        if (selection == 1) {
            if (cm.getPlayer().getMeso() > 1500) {
                cm.gainMeso(-1500);
                cm.getPlayer().changeMap(cm.getMap(cm.getPlayer().getMap().getId() == 250000100 ? 200090310 : 200090300), cm.getMap(cm.getPlayer().getMap().getId() == 250000100 ? 200090310 : 200090300).getPortal(0));
                cm.getPlayer().startMapTimeLimitTask(30, cm.getMap(cm.getPlayer().getMap().getId() == 200090310 ? 200000141 : 250000100));
                cm.dispose();
                return;
            }
            cm.sendNext("你有足够的金币吗？");
            cm.dispose();
            return;
        }
        cm.sendSimple("你想乘坐哪种飞机啊？#b" + (cm.getPlayer().getSkillLevel(80001027) == 1 ? "\r\n\r\n#L0#木飞机#l" : "") + "" + (cm.getPlayer().getSkillLevel(80001028) == 1 ? "\r\n#L1#红飞机#l" : "") + "");
        break;
    case 3:
        if (cm.getPlayer().getMeso() > 5000) {
            cm.gainMeso(-5000);
            cm.giveBuff(selection < 1 ? 80001027 : 80001028, 1);
            cm.getPlayer().changeMap(cm.getMap(cm.getPlayer().getMap().getId() == 250000100 ? 200110040 : 200110041), cm.getMap(cm.getPlayer().getMap().getId() == 250000100 ? 200110040 : 200110041).getPortal(0));
            cm.dispose();
            return;
        }
        cm.sendOk("升降场使用费好像不够啊。");
        cm.dispose();
    }
}
