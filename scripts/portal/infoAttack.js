/*
     名字：楓之島
     地图：小樹林
     描述：40000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1035)).getStatus() == 1) {
        pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("UI/tutorial.img/20"));
    }
    return false;
}
