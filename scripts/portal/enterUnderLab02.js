/*
     名字：隱藏地圖
     地图：傑利麥勒實驗室入口
     描述：931050600
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20743)).getStatus() < 1) {
        Packages.server.quest.MapleQuest.getInstance(20743).forceStart(pi.getPlayer(), 0, 1);
        pi.showInstruction("這裡洞穴裡好像有聽到孩子的聲音，不知道是不是醫生說的地方呢。", 150, 5);
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "洞穴裡好像有聽到孩子的聲音"));
    }
    return false;
}
