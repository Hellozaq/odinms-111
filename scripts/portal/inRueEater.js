/*
     名字：可疑的入口
     地图：危險的狸貓巢穴
     描述：310050520
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23970)).getStatus() == 1) {
        pi.openNpc(2159304);
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23971)).getStatus() == 1) {
        if (pi.getPlayer().itemQuantity(4032833)) {
            var em = pi.getEventManager("EscapePlans");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                em.startInstance(pi.getPlayer());
                return false;
            }
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "黑暗的坑道目前擁擠，請稍後再試"));
            return false;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往實驗室的門是關著的，需要找到防禦系統的門禁卡打開它"));
    }
    return false;
}
