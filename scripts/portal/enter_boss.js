/*
     名字：外星基地
     地图：外星基地走廊 6
     描述：610040230
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(610040300), pi.getMap(610040300).getPortal(0)); //外星基地電梯
    return true;
}
