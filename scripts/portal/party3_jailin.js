/*
     名字：隱密之地
     地图：雅典娜禁地&amp;lt;監獄Ⅰ&gt;
     描述：920010910
 */

var map = new Array(920010912, 920010922, 920010932);
var state = new Array(1, 2, 3);

function enter(pi) {
    if (pi.getMap(pi.getPlayer().getMap().getId()).getAllMonstersThreadsafe().size() < 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(pi.getPlayer().getMap().getId() + 2), pi.getMap(pi.getPlayer().getMap().getId() + 2).getPortal(1));
        for (var i = 0; i < map.length; i++)
            if (pi.getPlayer().getMap().getId() == map[i])
                if (pi.getPlayer().getMap().getReactorByName("party3_box0" + state[i]).getState() < 1)
                    pi.getPlayer().getMap().getReactorByName("party3_box0" + state[i]).forceHitReactor(1);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
