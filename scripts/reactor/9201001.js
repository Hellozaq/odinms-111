/*
     名字：威廉的古堡
     地图：威廉公爵之墓
     描述：990000700
 */

function act() {
    rm.getPlayer().getMap().spawnNpc(9040003, new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "一道耀眼的光芒閃過，緊接著，一個老人出現在被封鎖的大門前"));
}
