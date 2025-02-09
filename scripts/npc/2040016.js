/*
     名字：辛德
     地图：勇士之村
     描述：102000000
 */

function start() {
    cm.sendYesNo("暂时只接收耐久度修理工作.\r\n想修复耐久度么?");
}

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            cm.sendOk("好东西是很容易坏的，\r\n时不时修理一下装备也不错。");
            break;
        case 1:
            cm.sendRepairWindow();
    }
    cm.dispose();
}
