/*
     名字：可可島
     地图：可可島海邊
     描述：3000300
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2564)).getStatus() == 1) {
        pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("UI/tutorial.img/20"));
    }
    return false;
}
