/*
     名字：馬萊尼西亞島
     地图：叢林山谷
     描述：600010300
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28752)).getStatus() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "外星基地禁止外來者訪問"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(610040000), pi.getMap(610040000).getPortal(2)); //外星基地走廊 1
    return true;
}
