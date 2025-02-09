/*
     名字：騎士團要塞
     地图：榮譽殿堂
     描述：271030600
 */

function enter(pi) {
    if (pi.getPlayer().itemQuantity(4032923)) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(271040000), pi.getMap(271040000).getPortal(1)); //西格諾斯庭園
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31149)).getStatus() == 1) {
        pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31149)).setCustomData("find");
        pi.getPlayer().updateQuest(pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31149)), true);
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "確認了西格諾斯庭園的位置"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "西格諾斯庭園大門關閉著，需要找到一把鑰匙打開它"));
    return false;
}
