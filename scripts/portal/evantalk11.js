/*
     名字：夢中
     地图：夢見的路
     描述：900010100
 */

function enter(pi) {
    if (pi.getPlayer().getInfoQuest(22013).indexOf("mo11=o") != -1) {
        return false;
    }
    pi.getPlayer().updateInfoQuest(22013, pi.getPlayer().getInfoQuest(22013) + ";mo11=o");
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon11"));
    return true;
}
