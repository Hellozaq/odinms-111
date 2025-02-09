/*
     名字：隱藏地圖
     地图：突破甲板II
     描述：925100300
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(925100400), pi.getMap(925100400).getPortal(0)); //打倒海賊!
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
