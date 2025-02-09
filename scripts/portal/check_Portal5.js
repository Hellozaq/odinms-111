/*
     名字：過去的神木村
     地图：燃燒的神木村5
     描述：272000500
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(272000600), pi.getMap(272000600).getPortal(1)); //燃燒的神木村6
    return true;
}
