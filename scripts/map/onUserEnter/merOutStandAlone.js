/*
     名字：結冰的精靈森林
     地图：盛開的森林
     描述：910150003
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getMidMsg("按下鍵盤的[Ctrl]鍵就能進行普通攻擊", false, 0));
    ms.dispose();
}
