/*
     名字：被詛咒的寺院
     地图：另一扇門
     描述：105030000
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(105100000), pi.getMap(105100000).getPortal(2)); //通往地底的路
    return true;
}
