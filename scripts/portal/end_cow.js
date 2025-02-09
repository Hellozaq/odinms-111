/*
     名字：隱藏地圖
     地图：鯨魚號牛舍
     描述：912000100
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(120000103), pi.getMap(120000103).getPortal(0)); //餐廳
    return true;
}
