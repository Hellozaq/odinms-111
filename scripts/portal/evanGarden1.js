/*
     名字：猶塔家
     地图：前院
     描述：100030102
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(100030103), pi.getMap(100030103).getPortal(1)); //後院
    return true;
}
