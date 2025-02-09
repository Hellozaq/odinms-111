/*
     名字：豎琴弦&amp;lt;Do&gt;
     地图：艾利傑的庭園
     描述：920020000
 */

chen = ["11", "12", "20", "27", "39", "40"];

hui = ["12", "13", "21", "28", "40", "41"];

function start() {
    for (var i = 0; i < chen.length; i++)
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == chen[i]) {
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData(hui[i]);
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == 13)
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "一閃一閃，小星星，我真想知道你是什麼"));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/re", 4));
            cm.dispose();
            return;
        }
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData("");
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/re", 4));
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "你跑調了… 重新開始吧…"));
    cm.dispose();
}
