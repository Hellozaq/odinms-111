/*
     名字：巴洛古的寺院
     地图：神殿底層
     描述：105100100
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(105100000), pi.getMap(105100000).getPortal(1)); //通往地底的路
    return true;
}
