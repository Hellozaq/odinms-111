/*
     名字：隱藏地圖
     地图：飼育室通道
     描述：923010100
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(230000003), pi.getMap(230000003).getPortal(3)); //動物園
    return true;
}
