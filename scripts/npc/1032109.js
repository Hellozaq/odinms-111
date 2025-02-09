/*
     名字：魔法圖書館角落
     地图：魔法圖書館
     描述：910110000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20718)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20718)).getCustomData() == null) {
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20718)).setCustomData(1);
        for (var i = 0; i < 20; i++)
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(2220100), new java.awt.Point(-250 + (Math.random() * 400), 183));
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "一個神秘的黑影閃過，周圍出現了許多憤怒的怪物"));
        cm.showNpcSpecialEffect(1032109, "blackShadow");
    }
    cm.dispose();
}
