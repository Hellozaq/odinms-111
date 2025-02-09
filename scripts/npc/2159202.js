/*
     名字：雷德拓
     地图：危險！臨時機場
     描述：931000420
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("先不要管我，照顧好你自己，消滅盜賊後在來解救我。");
        cm.dispose();
        return;
    }
    if (!cm.getPlayer().itemQuantity(4032745)) {
        cm.sendOk("你有看到地上掉落的勳章嗎，最好拿一個，問問阿蘇爾有見過嗎。");
        cm.dispose();
        return;
    }
    cm.sendNext("呼…多虧了你，終於沒事了。現在我們不用再繼續交易了。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        Packages.server.quest.MapleQuest.getInstance(23131).forceStart(cm.getPlayer(), 0, 1);
        cm.getPlayer().changeMap(cm.getMap(310000010), cm.getMap(310000010).getPortal(0));
    }
    cm.dispose();
}
