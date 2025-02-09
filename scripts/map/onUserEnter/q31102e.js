/*
     名字：未來之門
     地图：未來之門
     描述：271000000
 */

function start() {
    if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31102)).getStatus() != 1) {
        ms.dispose();
        return;
    }
    ms.sendNextS("……………………！！！！！", 5, 2143002);
}

function action(mode, type, selection) {
    if (mode > 0) {
        ms.sendNextS("神獸為什麼會突然出現！？它好像在說什麼話……看來必須到未來去，到更深的地方去看看。神獸到底想說什麼呢？", 3);
        Packages.server.quest.MapleQuest.getInstance(31102).forceComplete(ms.getPlayer(), 0);
    }
    ms.dispose();
}
