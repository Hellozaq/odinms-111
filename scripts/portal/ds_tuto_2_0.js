/*
     名字：隱藏地圖
     地图：黑色魔法師的房前迴廊1
     描述：927000020
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
    pi.openNpc(2159309);
    return true;
}
