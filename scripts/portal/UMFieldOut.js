/*
     名字：耶雷弗
     地图：聯盟會議場
     描述：913050010
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(130000200), pi.getMap(130000200).getPortal(1)); //耶雷弗岔道
    return true;
}
