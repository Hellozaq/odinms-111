/*
     名字：皇后之路
     地图：開始之森林2
     描述：130030001
 */

var map = [130030001, 130030002, 130030003, 130030004]
var quest = [20010, 20011, 20012, 20013]
var state = [1, 2, 2, 2]

function enter(pi) {

    for (var i = 0; i < map.length; i++)
        if (pi.getPlayer().getMap().getId() == map[i])
            if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() == state[i]) {
                pi.playPortalSE();
                pi.getPlayer().changeMap(pi.getMap(pi.getPlayer().getMap().getId() + 1), pi.getMap(pi.getPlayer().getMap().getId() + 1).getPortal(1));
                return true;
            }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, pi.getPlayer().getMap().getId() == 130030001 ? "請先點擊NPC接收任務" : "未完成該區域任務，限制離開"));
    return false;
}
