/*
     名字：武陵道場
     地图：武陵道場1樓
     描述：925020100
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300216) != null) {
        pi.dojoAgent_NextMap(true, false);
        if (isRestingSpot(pi.getPlayer().getMap().getId())) {
            pi.gainItem(4001620, 1);
        }
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}

function isRestingSpot(id) {
    return (Math.floor(id / 100) % 100) % 6 == 0 && id != 925020001;
}
