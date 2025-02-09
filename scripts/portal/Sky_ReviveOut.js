/*
     名字：神木村
     地图：亡者的洞穴
     描述：240080050
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(240080000), pi.getMap(240080000).getPortal(0)); //天空的渡口
    return true;
}
