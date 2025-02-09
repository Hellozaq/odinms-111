/*
     名字：女皇之路
     地图：演武场入口
     描述：130020000
 */

var map = [913000000, 913000100, 913000200];
var quest = [20701, 20702, 20703]

function enter(pi) {
    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(map[i]).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第一練武場目前擁擠，請稍後再試"));
                return false;
            }
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(map[i]), pi.getMap(map[i]).getPortal(1));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(130020000));
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第一練武場只適用於接受修煉教官課程的騎士"));
    return false;
}
