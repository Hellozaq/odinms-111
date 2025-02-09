/*
     名字：新葉城 市區街道
     地图：新葉城-市區中心
     描述：600000000
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(683000000), pi.getMap(683000000).getPortal(3));
    return true;
}
