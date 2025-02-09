/*
     名字：武陵道場
     地图：武陵道場1樓
     描述：925020100
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300216) != null) {
        pi.dojo_getUp();
        pi.getPlayer().getMap().setReactorState(); //攻擊全地圖反應堆
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
