/*
     名字：說話的樹的請託
     地图：閃爍森林的通路
     描述：101010000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
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
            qm.sendNext("我的人类朋友，你能帮助我嗎？最近在#m101000000#附近出現了#r#o9100014##k。#m101000000#附近竟然會出現#r#o9100014##k，你不覺得奇怪嗎？");
            break;
        case 1:
            qm.sendNextPrev("可是他們老是在我面前擺動斧頭，上次還被斧頭刮到受傷了呢，這樣下去總有一天被斧頭砍死。");
            break;
        case 2:
            qm.sendAcceptDecline("我送你去奇怪的黑斧木妖隱藏的地方請幫我消滅40隻，這樣他們就不會再騷擾我了吧。");
            break;
        case 3:
            if (qm.getMap(910100100).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(910100100).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910100100), qm.getMap(910100100).getPortal(0));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(101010000));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "詭異的黑斧木妖的出現地目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
