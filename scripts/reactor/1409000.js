/*
     名字：龍沉睡的島
     地图：寂靜的洞穴
     描述：914100022
 */

function act() {
    rm.getPlayer().getMap().killMonster(9300391);
    Packages.server.quest.MapleQuest.getInstance(22605).forceStart(rm.getPlayer(), 0, 1);
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "洞穴的封印已被清除"));
}
