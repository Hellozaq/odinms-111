/*
     名字：坎特
     地图：動物園
     描述：230000003
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(6002)).getStatus() > 1) {
        cm.sendOk("謝謝你拯救了小浣猪。");
        cm.dispose();
        return;
    }
    cm.sendSimple("#e<任務：保護小浣猪>#n \r\n\r\n你是喜歡寵物的冒險家嗎？你能好好善待自己的寵物嗎，為了證明你的能力，請接受我的考驗。\r\n\r\nNumber of players: 1 \r\nLevel range: 70+ \r\nQuest: 怪物騎乘 \r\nTime limit: 5minutes\r\n\r\n#L0##b進入任務地圖#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(6002)).getStatus() < 1) {
            cm.sendOk("很抱歉！只有幾個被選中冒險家有資格保護小浣猪。");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("ProtectPig");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(cm.getPlayer());
            cm.dispose();
            return;
        }
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "野豬飼育室區域目前擁擠，請稍後再試"));
    }
    cm.dispose();
}
