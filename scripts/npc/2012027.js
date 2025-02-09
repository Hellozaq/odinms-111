/*
     名字：豎琴弦&amp;lt;Do&gt;
     地图：艾利傑的庭園
     描述：920020000
 */

chen = ["", "1", "13", "28", "29", "41"];

hui = ["1", "2", "14", "29", "30", "42"];

function start() {
    for (var i = 0; i < chen.length; i++)
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == chen[i]) {
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData(hui[i]);
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == 42) {
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getStatus() == 1)
                    cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)), true);
            }
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == 2)
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "閃爍，閃爍，小星星，我真想知道你是什麼"));
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).getCustomData() == 30)
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "就像天上的鑽石"));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/do", 4));
            cm.dispose();
            return;
        }
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3114)).setCustomData("");
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("orbis/do", 4));
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "你跑調了… 重新開始吧…"));
    cm.dispose();
}
