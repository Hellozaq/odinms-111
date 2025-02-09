/*
     名字：猶他家
     地图：小閣樓
     描述：100030100
 */

function enter(pi) {
    if (pi.getPlayer().getInfoQuest(22013).indexOf("hand=o") != -1) {
        return false;
    }
    pi.getPlayer().updateInfoQuest(22013, pi.getPlayer().getInfoQuest(22013) + ";hand=o");
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/0/0"));
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon70"));
    return true;
}
