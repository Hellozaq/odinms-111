/*
     名字：隱藏地圖
     地图：突破甲板I
     描述：925100200
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    if (eim != null && eim.getProperty("stage02") == null) {
        eim.setProperty("stage02", 1);
        pi.getMap(925100202).spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300107), new java.awt.Point(480, 238));
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(925100202), pi.getMap(925100202).getPortal(1)); //海盜王的心腹I
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0)
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "竊視的海賊王在這片區域巡查，在它返回通報之前，快想辦法消滅掉它"));
    return true;
}
