/*
     名字：飛行中
     地图：前往米納爾森林之路
     描述：200090510
 */

function enter(pi) {
    pi.cancelItem(2210016); //恢復變龍

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(270000100), pi.getMap(270000100).getPortal(2)); //時間神殿
    return true;
}
