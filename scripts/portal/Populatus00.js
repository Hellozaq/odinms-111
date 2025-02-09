/*
     名字：玩具城
     地图:   动力室
     描述：220080000
 */

/*
function enter(pi) {
var em = pi.getEventManager("Populatus");
var prop = em.getProperty("state");
if (prop == null || prop == 0) {
if (pi.getPlayer().getParty() == null) {
em.startInstance(pi.getPlayer());
return true;
}
em.startInstance(pi.getPlayer().getParty(), pi.getPlayer().getMap(), 200);
return true;
}
pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "動力室目前擁擠，請稍後再試"));
return false;
}
 */
function enter(pi) {
    /*
    if (!pi.haveItem(4031172) || pi.getQuestStatus(7103) == 2) {
    pi.playerMessage(6, "进入此区域，需要携带玩具城奖牌。");
    return false;
    }
     */
    pi.playPortalSE();
    if (pi.getPlayerCount(220080001) <= 0) {
        var papuMap = pi.getMap(220080001);

        papuMap.resetFully();


        pi.warp(220080001, "st00");
        pi.getPlayer().startMapTimeLimitTask(2400, pi.getPlayer().getMap().getReturnMap());
        return true;
    } else {
        if (pi.getMap(220080001).getSpeedRunStart() == 0 && (pi.getMonsterCount(220080001) <= 0 || pi.getMap(220080001).isDisconnected(pi.getPlayer().getId()))) {

            pi.warp(220080001, "st00");
            pi.getPlayer().startMapTimeLimitTask(1800, pi.getPlayer().getMap().getReturnMap());
            return true;
        } else {
            pi.playerMessage(6, "与帕普拉图斯战斗已经开始，所以你不能进入这个地方。");
            return false;
        }
    }
}
