/*
     名字：霧之海
     地图：第1 作戰室
     描述：923020110
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() != 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    if (pi.getPlayer().getParty().getLeader().getId() != pi.getPlayer().getId()) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "請等待組長的下一步指示"));
        return false;
    }
    if (((pi.getPlayer().getMap().getId() % 10) | 0) == 4) {
        if (pi.getPlayer().getMap().getReactorByName("switch0").getState() < 1 || pi.getPlayer().getMap().getReactorByName("switch1").getState() < 1) {
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通道已關閉，需要兩跟操縱杆都同時接通"));
            return false;
        }
        var bossroom = pi.getPlayer().getMap().getId() + 66; //90-14 = 76, 90-24=66
        if (((bossroom % 100) | 0) != 90) {
            bossroom += 10;
        }
        pi.playPortalSE();
        pi.warpParty(bossroom, 0);
        return true;
    }
    pi.playPortalSE();
    pi.warpParty(pi.getPlayer().getMap().getId() + 1, ((pi.getPlayer().getMap().getId() % 10) | 0) == 3 ? 1 : 2);
    return true;
}
