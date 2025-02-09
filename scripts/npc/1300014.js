/*
     名字：安全！
     地图：菇菇森林深處
     描述：106020300
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)).getCustomData() < 1) {
        cm.sendNextS("高聳的城牆上長著可怕的荊棘藤。如何進入城堡……唉！回去轉告#b#p1300003##k吧。", 3);
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)).setCustomData(1);
        cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)), true);
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).getStatus() == 1) {
        cm.sendNextS("這個…好像是用某種菇菇芽孢生成的強力的魔法結界，用物理力量和攻擊應該是無法打破的，回去轉告#b#p1300003##k吧。", 3);
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).setCustomData(1);
        cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)), true);
    }
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/normalEffect/mushroomcastle/chatBalloon1"));
    cm.dispose();
}
