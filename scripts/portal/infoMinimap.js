/*
     名字：楓之島
     地图：楓葉山丘
     描述：10000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1031)).getStatus() == 1) {
        pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("UI/tutorial.img/25"));
    }
    return false;
}
