/*
     名字：隱藏地圖
     地图：治療室
     描述：931050030
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(931050010), pi.getMap(931050010).getPortal(0)); //秘密廣場1
    return true;
}
