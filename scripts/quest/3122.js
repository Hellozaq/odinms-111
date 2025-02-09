/*
     名字：封印的確認
     地图：長老公館
     描述：211000001
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 2) {
                qm.dispose();
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
            qm.sendSimple("什麼？你是正常的嗎？居然相信邪摩斯的話而要直接去那邊？\r\n#L0##b不！跟相信比起來…不是太可憐了嗎…就這樣放任他，因為妄想而受折磨，搞不好殺了你也不一定。#l");
            break;
        case 1:
            qm.sendAcceptDecline("可憐？！你！對邪摩斯一定也不知道！！不！停止吧。因邪摩斯的妄想似乎無故浪費時間而雖然有點可惜…如果你一定要去的話也好。但，封印絕對不要碰！知道嗎？！");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(3122).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(921120000), qm.getMap(921120000).getPortal(1));
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
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
            qm.sendNext("我有去確認過#p2022008#的情況，它還是依然被封印在哪裡。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(3122).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(7000);
            qm.dispose();
    }
}
