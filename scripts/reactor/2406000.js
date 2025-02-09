/*
     名字：神木村
     地图：九靈龍巢穴
     描述：240040611
 */

function act() {
    rm.getPlayer().getMap().spawnNpc(2081008, new java.awt.Point(rm.getReactor().getPosition()));
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "光芒一閃，卵成熟裂開，誕生了一條容光煥發的龍寶寶"));
}
