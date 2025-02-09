/*
     名字：龍沉睡的島
     地图：寂靜的洞穴
     描述：914100022
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22588)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(914100010), pi.getMap(914100010).getPortal(2)); //被雪覆蓋的森林
        Packages.server.quest.MapleQuest.getInstance(22600).forceStart(pi.getPlayer(), 0, 1);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "不能這樣離開，伊培賀委託的任務還未完成"));
    return false;
}
