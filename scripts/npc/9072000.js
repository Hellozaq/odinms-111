/*
     名字：教官爾灣
     地图：維多利亞樹木站台
     描述：104020100
 */

var status = -1;

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 2) {
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
            cm.sendSimple("开着飞机，在天上飞吧。感觉会非常好。虽然我退休了，但我可以告诉你在天上飞的方法。#b\r\n\r\n#L0#我想租飞机。#l\r\n#L1#请为我说明一下飞机。#l\r\n#L2#飞机有哪些种类呢？#l");
            break;
        case 1:
            if (selection == 0) {
                cm.sendSimple("你想租赁什么飞机呢？\r\n#L0##b #fSkill/8000.img/skill/80001027/iconMouseOver#木飞机（1天）#r10000金币#b#l\r\n#L1# #fSkill/8000.img/skill/80001027/iconMouseOver#木飞机（7天）#r50000金币#b#l\r\n#L2##r #fSkill/8000.img/skill/80001028/iconMouseOver##k#b红飞机（1天）#r30000金币#b#l\r\n#L3# #fSkill/8000.img/skill/80001028/iconMouseOver#红飞机（7天）#r150000金币#b#l");
            }
            if (selection == 1) {
                cm.sendNext("飞机是什么？飞机是冒险岛世界的最新交通工具。和其他骑宠一样，可以乘坐飞机来往于各地之间。但是飞机可以在不同大陆间飞行。");
            }
            if (selection == 2) {
                cm.sendOk("可出租的飞机种有#b木飞机#k和#b红飞机#k，这两个虽然都有些贵，\r\n但红飞机要比木飞机快10妙。选择你喜欢的吧。");
                cm.dispose();
            }
            select = selection;
            break;
        case 2:
            if (select == 0) {
                if (cm.getPlayer().getMeso() < (selection < 1 ? 10000 : selection < 2 ? 50000 : selection < 3 ? 30000 : 150000)) {
                    cm.sendOk("金币好像不够啊？要想乘坐飞机，必须支付费用。");
                    cm.dispose();
                    return;
                }
                cm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(selection < 2 ? 80001027 : 80001028), 1, 1, cm.getCurrentTime() + (((selection == 0 || selection == 2) ? 1 : 7) * 24 * 60 * 60 * 1000));
                cm.gainMeso(-(selection < 1 ? 10000 : selection < 2 ? 50000 : selection < 3 ? 30000 : 150000));
                //cm.sendOk("好了，打開騎寵欄，可以嘗試下效果，希望你能過得愉快。");
                cm.dispose();
            }
            if (select == 1) {
                cm.sendNext("不是所有大陆都可以飞行。只能从#b天空之城#k飞往#b金银岛、圣\r\n地、埃德尔斯坦、玩具城、阿里安特、武陵、神木村#k。当然\r\n也可以反方向飞行。此外在#b金银岛#k和#b埃德尔斯坦#k之间也可以\r\n飞行。其他的地方都太危险，无法飞行。希望你能记住。");
            }
            break;
        case 3:
            cm.sendNextPrev("想乘坐飞机到其他大陆去的话，只要和升降场上的#b售票员#k对\r\n话就行。");
            break;
        case 4:
            cm.sendPrev("就是这些，还有问题吗？");
            cm.dispose();
    }
}
