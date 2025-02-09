/*
     名字：天空之城
     地图：天空階梯 II
     描述：200010300
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(920020000), pi.getMap(920020000).getPortal(2)); //艾利傑的庭園
    return true;
}
