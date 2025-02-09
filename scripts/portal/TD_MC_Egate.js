/*
     名字：菇菇王國
     地图：東邊城塔
     描述：106021400
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(106021300), pi.getMap(106021300).getPortal(1)); //瑪天路6
    return true;
}
