/*
     名字：艾畢奈亞的隱身處
     地图：蝴蝶精的森林2
     描述：300030300
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 1) {
                cm.dispose();
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
            var time = parseInt(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2133006)).getCustomData());
            var stime = ((1 * 3600000) - (cm.getCurrentTime() - time)) / 1000 / 60;
            if (time + (1 * 3600000) > cm.getCurrentTime()) {
                cm.sendOk("由於艾畢奈亞女皇已將入口封印，通道將關閉" + Math.floor(stime / 60) + "小時" + Math.round(stime % 60) + "分鐘。");
                cm.dispose();
                return;
            }
            cm.sendYesNo("前方通往艾畢奈亞女皇的隱身處，你確定要進入嗎？");
            break;
        case 1:
            var em = cm.getEventManager("fairyBoss");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                if (cm.getPlayer().getParty() == null) {
                    em.startInstance(cm.getPlayer());
                    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2133006)).setCustomData("" + cm.getCurrentTime());
                    cm.dispose();
                    return;
                }
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2133006)).setCustomData("" + cm.getCurrentTime());
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "艾畢奈亞女皇的隱身處目前擁擠，請稍後再試"));
            cm.dispose();
    }
}
