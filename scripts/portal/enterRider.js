/*
     名字：艾納斯島
     地图：寒冰平原
     描述：211050000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21610)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "騎士的平原只適用於第 2 次騎狼任務的狂狼勇士"));
        return false;
    }
    if (pi.getMap(921110000).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "騎士的平原目前擁擠，請稍後再試"));
        return false;
    }

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(921110000), pi.getMap(921110000).getPortal(2)); //騎士的平原
    pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(211050000));
    return true;
}
