/*
     名字：猶他家
     地图：客廳
     描述：100030101
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(100030102), pi.getMap(100030102).getPortal(2)); //前院
    return true;
}
