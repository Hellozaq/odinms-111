/*
     名字：皇后之路
     地图：開始之森林1
     描述：130030000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20022)).getStatus() != 1) {
        Packages.server.quest.MapleQuest.getInstance(20022).forceStart(pi.getPlayer(), 0, 1);
        pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
        pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage("歡迎來到楓之谷！我的名字叫顧，我將是你的嚮導！我將在這裡回答你的問題，並指導你，直到你達到10級，成為一名騎士在訓練。如果您有任何問題，請按兩下我！"));
    }
    return true;
}
