/*
     名字：次元的縫隙
     地图：黑暗的祭壇
     描述：272030400
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(272030300), pi.getMap(272030300).getPortal(3)); //黑暗的祭壇入口
    return true;
}
