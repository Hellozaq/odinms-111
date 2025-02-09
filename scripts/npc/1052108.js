/*
     名字：倒下的垃圾桶
     地图：沼地小屋
     描述：103030101
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2878)).getStatus() != 1 || cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2878)).getCustomData() == "check") {
        cm.dispose();
        return;
    }
    for (var i = 0; i < 5; i++)
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(3110100), new java.awt.Point(250, 155));
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "一些怪物跑了出來"));

    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2878)).setCustomData("check");
    cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2878)), true);
    cm.dispose();
}
