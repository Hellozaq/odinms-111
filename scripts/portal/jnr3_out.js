/*
     名字：隱藏地圖
     地图：特殊實驗室
     描述：926110200
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("jnr3_out3").getState() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(926110203), pi.getMap(926110203).getPortal(0)); //猶利塔的辦公室
    }
    return false;
}
