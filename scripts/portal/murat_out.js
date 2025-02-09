/*
     名字：隱藏地圖
     地图：盲俠的房間
     描述：912040300
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(120000100), pi.getMap(120000100).getPortal(0)); //上層走廊
    return true;
}
