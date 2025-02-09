/*
     名字：武公的測試
     地图：武陵道場後路
     描述：925040000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("封印石……那是很久很久以前，由桃花仙境看管的東西……難道說覬覦它的人又出現了……");
            break;
        case 1:
            qm.sendNextPrevS("請告訴我有關封印石的事情。");
            break;
        case 2:
            qm.sendAcceptDecline("那可不行，影子武士這個傢伙確實很危險，但我怎麼知道你的底細呢？我要測試一下你……你接受#b測試#k嗎？");
            break;
        case 3:
            qm.sendPrev("戰士的武器，其實就是自信。技能比任何言語都能更好地體現你的內心。由我的分身來和你戰鬥，讓我看看你的真心是怎樣的。");
            break;
        case 4:
            if (qm.getMap(925040001).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21746).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(925040001).resetFully();
                qm.getPlayer().changeMap(qm.getMap(925040001), qm.getMap(925040001).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(925040000));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "武陵道場特別樓目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
