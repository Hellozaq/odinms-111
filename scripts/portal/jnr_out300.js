/*
     名字：隱藏地圖
     地图：研究室103號
     描述：926110303
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(926110400), pi.getMap(926110400).getPortal(0)); //中央研究室入口
    return true;
}
