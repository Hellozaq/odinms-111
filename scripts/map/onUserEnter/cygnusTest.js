/*
     名字：開始
     地图：皇家騎士團
     描述：913040000
 */

function start() {
    switch (ms.getPlayer().getMap().getId()) {
        case 913040006:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(0));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction.img/cygnus/Scene9"));
            break;
        default:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction.img/cygnus/Scene" + (ms.getPlayer().getMap().getId() - 913040000)));
    }
    ms.dispose();
}
