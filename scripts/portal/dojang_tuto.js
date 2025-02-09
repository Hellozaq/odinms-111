/*
     名字：新手教學
     地图：武陵道場修煉場
     描述：925020010
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300216) != null) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(925020001), pi.getMap(925020001).getPortal(0)); //武陵道場入口
        pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150100)).setCustomData(1);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "蕭公: 哈哈！你打算像個懦夫一樣逃跑嗎？我不會讓你那麼輕易逃脫的"));
    return false;
}
