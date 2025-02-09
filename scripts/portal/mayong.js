/*
     名字：神木村
     地图：寒冰半人馬領土
     描述：240020400
 */

var quest = [1451, 1453, 1455, 1457, 1459];

function enter(pi) {

    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(924000200).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "噴火龍的森林目前擁擠，請稍後再試"));
                return false;
            }
            pi.getMap(924000200).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(924000200), pi.getMap(924000200).getPortal(2)); //噴火龍的森林
            pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(240020400));
            return true;
        }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(240020401), pi.getMap(240020401).getPortal(2)); //噴火龍棲息地
    return true;
}
