/*
     名字：豎琴弦&amp;lt;Do&gt;
     地图：艾利傑的庭園
     描述：920020000
 */

chen = ["2", "3", "6", "14", "15", "21", "22", "30", "31", "34"];

hui = ["3", "4", "7", "15", "16", "22", "23", "31", "32", "35"];

function start() {
    for (var i = 0; i < chen.length; i++)
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == chen[i]) {
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData(hui[i]);
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == 22)
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "在如此高的世界之上"));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/sol", 4));
            cm.dispose();
            return;
        }
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData("");
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/sol", 4));
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "你跑調了… 重新開始吧…"));
    cm.dispose();
}
