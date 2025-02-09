/*
     名字：隱密之地
     地图：雅典娜禁地&amp;lt;庭園&gt;
     描述：920010800
 */

function enter(pi) {

    if (pi.getMap(920010800).getReactorById(2001001).getState() > 0 && pi.getPlayer().getMap().getMonsterById(9300039) == null) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(920010100), pi.getMap(920010100).getPortal(3)); //雅典娜禁地&amp;lt;中央塔&gt;
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於爸爸精靈魔法的阻擋，通道已關閉"));
    return false;
}
