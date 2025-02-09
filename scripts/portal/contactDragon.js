/*
     名字：夢中
     地图：夢見的路
     描述：900010100
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(900090100), pi.getMap(900090100).getPortal(0)); //動畫 教程0
    return true;
}
