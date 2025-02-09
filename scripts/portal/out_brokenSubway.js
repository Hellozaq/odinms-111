/*
     名字：隱藏地圖
     地图：維修中的列車
     描述：931050400
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103020000), pi.getMap(103020000).getPortal(2)); //地鐵售票處
    return true;
}
