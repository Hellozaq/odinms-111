/*
     名字：艾靈森林
     地图：女王的藏身處
     描述：300030310
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(300030300), pi.getMap(300030300).getPortal(2)); //蝴蝶精的森林2
    return true;
}
