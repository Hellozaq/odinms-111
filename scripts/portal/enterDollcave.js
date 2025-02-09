/*
     名字：南部岩山
     地图：岩地荒野
     描述：102010100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21731)).getStatus() == 1 || pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20730)).getStatus() == 1) {
        pi.openNpc(1063011);
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22549)).getStatus() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(910050300), pi.getMap(910050300).getPortal(1)); //遺棄的洞穴
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21728)).getStatus() == 1) {
        Packages.server.quest.MapleQuest.getInstance(21761).forceStart(pi.getPlayer(), 0, 0);
        pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/normalEffect/demonSlayer/findSpy"));
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "找到了傀儡師的洞穴，但好像設定了暗號，快回去找日誌吧"));
    }
    return false;
}
