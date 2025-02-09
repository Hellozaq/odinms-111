/*
     名字：隐密之地
     地图：雅典娜禁地&amp;lt;中央塔&gt
     描述：920010100
 */

function act() {
    rm.getPlayer().getMap().getReactorByName("minerva").forceHitReactor(rm.getPlayer().getMap().getReactorByName("minerva").getState() + 1);
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "女神像第一個碎片已經放回原位"));
}

//4001046女神像第一個碎片
