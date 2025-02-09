/*
     名字：馬萊尼西亞島
     地图：克蘭卡叢林盆地
     描述：600010200
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28746)).getStatus() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於地震的破壞，前方道路已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(600010300), pi.getMap(600010300).getPortal(1)); //叢林山谷
    return false;
}
