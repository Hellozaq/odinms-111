/*
     名字：隱藏地圖
     地图：中央研究室入口
     描述：926110400
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(926110401), pi.getMap(926110401).getPortal(1)); //中央研究室
    return true;
}
