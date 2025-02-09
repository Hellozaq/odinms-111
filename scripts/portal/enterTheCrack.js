/*
     名字：時間之路
     地图：三扇門
     描述：270000000
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(272000000), pi.getMap(272000000).getPortal(1)); //時間神殿
    return true;
}
