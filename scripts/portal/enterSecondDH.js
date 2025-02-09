/*
     名字：皇后之路
     地图：練武場入口
     描述：130020000
 */

var map = [913001000, 913001001, 913001002];
var quest = [20201, 20202, 20203, 20204, 20205];

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            var rand = Math.floor(Math.random() * map.length);
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(map[rand]), pi.getMap(map[rand]).getPortal(0));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(130020000));
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第二練武場只適用于接受騎士等級試煉的騎士"));
    return false;
}
