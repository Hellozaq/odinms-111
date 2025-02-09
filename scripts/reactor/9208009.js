/*
     名字：威廉的古堡
     地图：死亡迴廊
     描述：990000800
 */

function act() {
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往惡靈13的王座入口，已经開啟"));
}
