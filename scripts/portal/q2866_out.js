/*
     名字：隱藏地圖
     地图：2號線3區間
     描述：910310200
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103020410), pi.getMap(103020410).getPortal(3)); //2號線第2區段
    return true;
}
