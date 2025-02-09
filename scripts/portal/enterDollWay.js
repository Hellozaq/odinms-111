/*
     名字：詛咒之林
     地图：玩偶師的避難所
     描述：101040311
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21734)).getStatus() == 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(910510100), pi.getMap(910510100).getPortal(1)); //傀儡師秘密通路
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於不知道暗號，無法訪問傀儡師秘密通路"));
    return false;
}
