/*
     名字：普蘭西斯
     地图：傀儡師的洞穴
     描述：910510000
 */

function start() {
    cm.sendNext("厄！！！…什麼？你是誰啊？！！該不會是……#b皇家騎士團#k？怎麼會找到這裡啊？……沒辦法！我身為#r黑色翅膀的成員#k，一定要剷除騎士團！決鬥吧！");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300285), new java.awt.Point(479, 245));
    }
    cm.dispose();
}
