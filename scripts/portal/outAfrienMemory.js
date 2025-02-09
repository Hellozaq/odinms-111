/*
     名字：阿普立恩的記憶
     地图：陣地後面
     描述：900030000
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(914100021), pi.getMap(914100021).getPortal(1)); //寂靜的洞穴
    return true;
}
