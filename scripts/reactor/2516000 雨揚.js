/*
     名字：隱藏地圖
     地图：海賊王的最後
     描述：925100500
 */

function act() {
    rm.getPlayer().getMap().spawnNpc(2094001, new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "海賊王死後，雨揚被釋放"));
}
