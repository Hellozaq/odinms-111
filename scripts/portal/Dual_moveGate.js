/*
     名字：墮落城市
     地图：墮落城市
     描述：103000000
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103050000), pi.getMap(103050000).getPortal(5)); //墮落城市後街
    return true;
}
