/*
     名字：黑路
     地图：傷兵的棚子
     描述：914000000
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(914000100), pi.getMap(914000100).getPortal(1)); //避難準備中
    return true;
}
