/*
     名字：結冰的精靈森林
     地图：發光的洞穴入口
     描述：910150002
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getMidMsg("在傳送口點擊鍵盤的[↑]鍵就能前往與傳送口連接的地方", false, 0));
    ms.dispose();
}
