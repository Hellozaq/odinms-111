/*
     名字：怪物擂台賽
     地图：擂台賽場地4&amp;lt;復活之章&gt;
     描述：980000402
 */

function enter(pi) {

    var portal = pi.getPlayer().getCarnivalParty().getTeam() == 0 ? 4 : 3;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(980000401), pi.getMap(980000401).getPortal(portal)); //擂台賽場地4&amp;lt;戰場&gt;
    return true;
}
