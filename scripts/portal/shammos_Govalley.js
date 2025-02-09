/*
     名字：冰雪峽谷
     地图：冰雪峽谷入口
     描述：921120000
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(921120700), pi.getMap(921120700).getPortal(4)); //冰封絕壁
    return true;
}
