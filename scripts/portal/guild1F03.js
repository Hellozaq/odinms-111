/*
     名字：威廉的古堡
     地图：迷宮之盡頭
     描述：990000631
 */

function enter(pi) {
    eim = pi.getPlayer().getEventInstance();
    eim.setProperty(pi.getPlayer().getName(), 3);

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(990000700), pi.getMap(990000700).getPortal(1)); //威廉公爵之墓
    return true;
}
