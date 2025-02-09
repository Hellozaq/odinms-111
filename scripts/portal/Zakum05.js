/*
     名字：冰原雪域
     地图：通往殘暴炎魔之門
     描述：211042300
 */

function enter(pi) {
    if (!pi.getPlayer().itemQuantity(4001017)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "殘暴炎魔祭壇只允許攜帶火焰之眼的勇士訪問"));
        return false;
    }

    map = pi.getPlayer().getMap().getId() + 100; //殘暴炎魔祭壇入口
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(1));

    return true;
}
