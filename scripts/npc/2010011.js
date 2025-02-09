/* Dawnveil
Guild tasks
Lea
Made by Daenerys
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("什么时候想要前往家族中心<英雄公馆>，就再来找我吧。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("你好，我是负责家族支援工作的蕾雅，为了方便工作，我正在\r\n帮助大家前往家族中心<英雄公馆>，你现在就要前往家族中心\r\n<英雄公馆>吗？");
    } else if (status == 1) {
        cm.sendNext("好，那我现在就让你过去。");
    } else if (status == 2) {
        cm.saveReturnLocation("GUILD");
        cm.warp(200000301);
        cm.dispose();
    }
}
