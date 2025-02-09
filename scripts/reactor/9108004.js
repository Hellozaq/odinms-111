/*
     名字：隱藏地圖
     地图：迎月花山丘
     描述：910010000
 */

function act() {
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "月亮左邊的種子已經發芽了"));
    rm.getPlayer().getMap().getReactorByName("fullmoon").forceHitReactor(rm.getPlayer().getMap().getReactorByName("fullmoon").getState() + 1);
    if (rm.getPlayer().getMap().getReactorByName("fullmoon").getState() > 5) {
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "月妙兔子出現了，請保護它，這樣它就可以做美味的年糕了"));
        rm.getPlayer().getMap().setSpawns(true);
        rm.getPlayer().getMap().respawn(true);
        rm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300061), new java.awt.Point(-183, -433));
    }
}
