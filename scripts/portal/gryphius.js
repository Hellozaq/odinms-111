/*
     名字：神木村
     地图：火燄死亡戰場
     描述：240020100
 */

var quest = [1451, 1453, 1455, 1457, 1459];

function enter(pi) {

    for (var i = 0; i < quest.length; i++)
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == 1) {
            if (pi.getMap(924000201).getCharacters().size() > 0) {
                pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "格瑞芬多的森林目前擁擠，請稍後再試"));
                return false;
            }
            pi.getMap(924000201).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(924000201), pi.getMap(924000201).getPortal(2)); //格瑞芬多的森林
            pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(240020100));
            return true;
        }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(240020101), pi.getMap(240020101).getPortal(2)); //格瑞芬多森林
    return true;
}
