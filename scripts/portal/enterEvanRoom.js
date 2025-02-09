/*
     名字：猶他家
     地图：客廳
     描述：100030101
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(100030100), pi.getMap(100030100).getPortal(1)); //小閣樓
    return true;
}
