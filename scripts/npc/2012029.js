/*
     名字：豎琴弦&amp;lt;Do&gt;
     地图：艾利傑的庭園
     描述：920020000
 */

chen = ["9", "10", "18", "19", "25", "26", "37", "38"];

hui = ["10", "11", "19", "20", "26", "27", "38", "39"];

function start() {
    for (var i = 0; i < chen.length; i++)
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == chen[i]) {
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData(hui[i]);
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/mi", 4));
            cm.dispose();
            return;
        }
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData("");
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/mi", 4));
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "你跑調了… 重新開始吧…"));
    cm.dispose();
}
