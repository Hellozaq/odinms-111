/*
     名字：隱藏地圖
     地图：隱藏之塔
     描述：921160100
 */

function enter(pi) {
    pi.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "有一位組員爬到了塔楼的頂端"));
    return true;
}
