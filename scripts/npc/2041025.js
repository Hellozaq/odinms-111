/*
     名字：機械裝置
     地图：動力室
     描述：220080001
 */

function start() {
    cm.sendYesNo("嘟嘟。。。嘟嘟。。。通过我可以进入安全地区哦。嘟嘟。。。嘟嘟。。。你想离开这个地方吗？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.warp(220080000);
    }
    cm.dispose();
}
