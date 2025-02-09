/*
     名字：火獨眼獸洞穴壁
     地图：岩地荒野
     描述：102010100
 */

function start() {
    cm.sendGetText("聽見奇怪的聲音，若想進入，#b就要說出暗號！#k");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getText() == "弗朗西斯是天才人偶师！" || cm.getText() == "普蘭西斯是天才傀儡師！" || cm.getText() == "") {
            if (cm.getMap(910510000).getCharacters().size() > 0) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "傀儡師的洞穴目前擁擠，請稍後再試"));
                cm.dispose();
                return;
            }
            cm.getMap(910510000).resetFully();
            cm.getPlayer().changeMap(cm.getMap(910510000), cm.getMap(910510000).getPortal(1));
            cm.getPlayer().getMap().spawnNpc(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20730)).getStatus() == 1 ? 1104000 : 1204002, new java.awt.Point(479, 245));
            cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(102010100));
            cm.dispose();
            return;
        }
        cm.sendOk("输入的暗號#b錯誤#k。");
    }
    cm.dispose();
}
