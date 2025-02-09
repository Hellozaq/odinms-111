/*
     名字：隱藏地圖
     地图：鐵舖外部
     描述：914021010
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(914021000), pi.getMap(914021000).getPortal(2)); //大將翁的鐵舖
    return true;
}
