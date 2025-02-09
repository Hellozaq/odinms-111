/*
     名字：沼地
     地图：野生鱷魚沼地
     描述：103030100
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103030101), pi.getMap(103030101).getPortal(1)); //沼地小屋
    return true;
}
