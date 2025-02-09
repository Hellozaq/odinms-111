/*
     名字：隱藏地圖
     地图：階段 7 - 亞邁斯的寶庫
     描述：670010750
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(670010800), pi.getMap(670010800).getPortal(0)); //階段 7 - 亞邁斯的寶庫
    return true;
}
