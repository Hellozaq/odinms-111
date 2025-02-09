/*
     名字：豎琴弦&amp;lt;Do&gt;
     地图：艾利傑的庭園
     描述：920020000
 */

function start() {
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/si", 4));
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData("");
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "你跑調了… 重新開始吧…"));
    cm.dispose();
}
