/*
     名字：隱密之地
     地图：雅典娜禁地&amp;lt;罪人之室&gt;
     描述：920010900
 */

function enter(pi) {
    if (pi.getMap(920010100).getReactorByName("minerva").getState() > 4) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(920010930), pi.getMap(920010930).getPortal(1)); //雅典娜禁地&amp;lt;監獄Ⅲ&gt;
    }
    return false;
}
