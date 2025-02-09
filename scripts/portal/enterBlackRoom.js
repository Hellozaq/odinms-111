/*
     名字：神秘岛
     地图：通天塔&amp;lt;16层&gt;
     描述：200080600
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(200080601), pi.getMap(200080601).getPortal(1)); //天空之城塔&amp;lt;16層&gt;
    return true;
}
