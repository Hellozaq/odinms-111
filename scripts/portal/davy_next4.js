/*
     名字：隱藏地圖
     地图：打倒海賊!
     描述：925100400
 */

function enter(pi) {
    for (var i = 1; i < 5; i++)
        if (pi.getPlayer().getMap().getReactorByName("sMob" + i).getState() < 1) {
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於海盜的船艙不斷支援，通道已關閉"));
            return false;
        }
    reactor1 = pi.getMap(925100201).getReactorByName("treasure1");
    reactor2 = pi.getMap(925100301).getReactorByName("treasure2");
    mob = reactor1.getState() > 1 && reactor2.getState() > 1 ? 9300106 : reactor1.getState() > 1 || reactor2.getState() > 1 ? 9300105 : 9300119;

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(925100500), pi.getMap(925100500).getPortal(0)); //海賊王的最後
    pi.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(mob), new java.awt.Point(777, 238));
    return true;
}
