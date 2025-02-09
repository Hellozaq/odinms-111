/*
     名字：過去的神木村
     地图：燃燒的神木村6
     描述：272000600
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(272000500), pi.getMap(272000500).getPortal(2)); //燃燒的神木村5
    return true;
}
