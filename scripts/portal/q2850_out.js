/*
     名字：隱藏地圖
     地图：盜賊的基地
     描述：910310100
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103000000), pi.getMap(103000000).getPortal(16)); //墮落城市
    return true;
}
