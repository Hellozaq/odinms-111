/*
     名字：生命之穴
     地图：試煉之穴Ⅱ
     描述：240060100
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("tremble2").getState() < 1) {
        pi.getPlayer().getMap().getReactorByName("tremble2").forceHitReactor(1);
        pi.forceStartReactor(pi.getPlayer().getMap().getId(), 2408003);
        pi.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "在洞穴的深处，一个巨大的生物正在靠近。"));
    }
    return false;
}
