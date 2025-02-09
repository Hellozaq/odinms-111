/*
     名字：隱藏地圖
     地图：可疑的步道
     描述：310060221
 */

var quest1 = [23040, 23041, 23042];
var quest2 = [23043, 23043, 23045];
var map = [931000300, 931000301, 931000302];

function enter(pi) {
    for (var i = 0; i < quest1.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest1[i])).getStatus() > 1) {
            if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest2[i])).getStatus() > 1 || pi.getPlayer().itemQuantity(4032743)) {
                pi.playPortalSE();
                pi.getPlayer().changeMap(pi.getMap(map[i]), pi.getMap(map[i]).getPortal(0)); //可疑洞穴的岔路
                return true;
            }
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "礦區的限制區域，需要傑利麥勒的卡片鑰匙"));
    return false;
}
