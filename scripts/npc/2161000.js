/*
     名字：凡雷恩
     地图：見面室
     描述：211070100
 */

function start() {
    cm.sendAcceptDecline("你們是來打敗我的勇士嗎，或者是反黑法師聯盟的？不管你是誰，如果我們確定彼此的目的，就沒有必要閒聊。快點！你們這些傻瓜！");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.removeNpc(cm.getPlayer().getMap().getId(), 2161000);
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(8840010), new java.awt.Point(0, -181));
    }
    cm.dispose();
}
