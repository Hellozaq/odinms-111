/*
     名字：馬萊尼西亞島
     地图：叢林山谷
     描述：600010300
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(600010200), pi.getMap(600010200).getPortal(5)); //克蘭卡叢林盆地
    return true;
}
