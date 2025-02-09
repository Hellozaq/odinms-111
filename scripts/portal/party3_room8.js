/*
     名字：隱密之地
     地图：雅典娜禁地&amp;lt;中央塔&gt;
     描述：920010100
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getReactorByName("minerva").getState() > 4) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(920011000), pi.getMap(920011000).getPortal(1)); //雅典娜禁地&amp;lt;黑暗之室&gt;
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於爸爸精靈控制著女神塔，黑暗之室已被封鎖"));
    return false;
}
