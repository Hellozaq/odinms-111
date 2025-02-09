/*
     名字：潘姆之路
     地图：农场入口
     描述：100030400
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2073)).getStatus() == 1) {
        pi.playPortalSE();
        pi.warp(900000000, 0);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "猶塔的肥肥農場禁止陌生人訪問"));
    return false;
}
