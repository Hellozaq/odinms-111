/*
     名字：燒毀的殘骸2
     地图：惡魔的老家
     描述：924020000
 */

function start() {
    cm.sendNextS("戴米安！回答我！！你在哪……活著的話，就回答我。", 3);
    Packages.server.quest.MapleQuest.getInstance(23202).forceStart(cm.getPlayer(), cm.getNpc(), null);
    Packages.server.quest.MapleQuest.getInstance(23201).forceComplete(cm.getPlayer(), cm.getNpc());
    cm.dispose();
}
