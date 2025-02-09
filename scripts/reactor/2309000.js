/*
     名字：霧之海
     地图：第5 作戰室
     描述：923020114
 */

function act() {
    rm.getPlayer().getMap().getReactorByName("jump").forceHitReactor(rm.getReactor().getState());
}
