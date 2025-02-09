/*
     名字：萬人迷
     地图：訓練場
     描述：120000104
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2915)).getStatus() == 1 || cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2916)).getStatus() == 1) {
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2915)).getStatus() == 1 && cm.getMap(912040100).getCharacters().size() < 1) {
            cm.getMap(912040100).resetFully();
            cm.getPlayer().changeMap(cm.getMap(912040100), cm.getMap(912040100).getPortal(1));
            cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(120000104));
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2916)).getStatus() == 1 && cm.getMap(912040200).getCharacters().size() < 1) {
            cm.getMap(912040200).resetFully();
            cm.getPlayer().changeMap(cm.getMap(912040200), cm.getMap(912040200).getPortal(1));
            cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(120000104));
            cm.dispose();
            return;
        }
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "萬人迷的試驗場目前擁擠，請稍後再試"));
        cm.dispose();
        return;
    }
    cm.sendOk("等一等，你找我有事嗎？ 怎麼總是偷偷看我呢？！");
    cm.dispose();
}
