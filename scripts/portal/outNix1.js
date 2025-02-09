/*
     名字：隱藏地圖
     地图：偏僻森林
     描述：240020600
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(240020101), pi.getMap(240020101).getPortal(3)); //格瑞芬多森林
    return true;
}
