/*
     名字：瑞恩島
     地图：瑞恩西邊平原
     描述：104000000
 */

var quest = [21015, 21016, 21017]
var mob = ["穆魯帕", "穆魯菲亞", "穆魯穆魯"]

function enter(pi) {

    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "" + mob[i] + "在瑞恩村右邊的區域"));
            return false;
        }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(140010000), pi.getMap(140010000).getPortal(2)); //瑞恩西邊平原
    return false;
}
