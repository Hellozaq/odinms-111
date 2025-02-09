/*
     名字：安傑力克
     地图：結婚小鎮
     描述：680000000
 */

function start() {
    if (cm.getPlayer().getMarriageId() < 1) {
        cm.sendOk("你好像還沒結婚呢，婚都沒結就想要結婚戒指？你還是先找個心愛的人，結完婚再來吧~");
        cm.dispose();
        return;
    }
    cm.sendSimple("需要我幫忙嗎？\r\n#L0##b我想查看結婚禮物。#l");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.sendOk("您的結婚禮物好像剛剛已經被拿走了！");
    cm.dispose();
}
