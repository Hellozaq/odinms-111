/*
     名字：封印寺院入口
     地图：下級修煉場
     描述：250020100
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21747)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    cm.sendGetText("封印神殿的入口。#bpassword#k");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getText() == "道可道非常道" || cm.getText() == "") {
            if (cm.getMap(925040100).getCharacters().size() < 1) {
                cm.getMap(925040100).resetFully();
                cm.getPlayer().changeMap(cm.getMap(925040100), cm.getMap(925040100).getPortal(1));
                cm.getPlayer().getMap().spawnNpc(1204020, new java.awt.Point(897, 51));
                cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(250020100));
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "被封印的寺院目前擁擠，請稍後再試"));
            cm.dispose();
            return;
        }
        cm.sendOk("输入的密碼錯誤。");
    }
    cm.dispose();
}
