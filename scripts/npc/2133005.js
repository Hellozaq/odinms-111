/*
     名字：洞穴入口
     地图：岩石山洞穴
     描述：300010410
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
            var time = parseInt(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2133005)).getCustomData());
            var stime = ((1 * 3600000) - (cm.getCurrentTime() - time)) / 1000 / 60;
            if (time + (1 * 3600000) > cm.getCurrentTime()) {
                //cm.sendOk("洞穴入口已被封印，通道将关闭" + Math.floor(stime / 60) + "小时" + Math.round(stime % 60) + "分钟。");
                cm.sendOk("洞穴入口已被封印。");
                cm.dispose();
                return;
            }
            cm.sendYesNo("幽暗的洞穴里似乎有什么动静。要进去看看吗？");
            break;
        case 1:
            var em = cm.getEventManager("chowBoss");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                if (cm.getPlayer().getParty() == null) {
                    em.startInstance(cm.getPlayer());
                    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2133005)).setCustomData("" + cm.getCurrentTime());
                    cm.dispose();
                    return;
                }
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2133005)).setCustomData("" + cm.getCurrentTime());
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "洞穴深處目前擁擠，請稍後再試"));
            cm.dispose();
    }
}
