/*
     名字：隱藏地圖
     地图：偏僻森林
     描述：240020600
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(240020401), pi.getMap(240020401).getPortal(3)); //噴火龍棲息地
    return true;
}
