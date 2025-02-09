/*
     名字：耶雷弗
     地图：聯盟會議場
     描述：913050010
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(0));
    ms.dispose();
}
