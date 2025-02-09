/*
     名字：瑞恩島
     地图：瑞恩修練場入口
     描述：140010100
 */

var map = [914010000, 914010100, 914010200];
var quest = [21701, 21702, 21703]

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(map[i]).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "企鵝訓練場目前擁擠，請稍後再試"));
                return false;
            }

            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(map[i]), pi.getMap(map[i]).getPortal(1));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(140010100));
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(5, "在普奥那里得到充分的修炼后才能进入企鹅修炼场。"));
    return false;
}
