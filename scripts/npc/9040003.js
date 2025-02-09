/*
     名字：威廉公爵的靈魂
     地图：威廉公爵之墓
     描述：990000700
 */

function start() {
    if (cm.getPlayer().getMap().getReactorByName("ghostgate").getState() > 0) {
        cm.sendOk("在我認為是不朽的沉睡之後，我終於找到了一個可以拯救沙裡安的人，我現在真的可以安息了。");
        cm.dispose();
        return;
    }
    if (cm.getPlayerStat("GRANK") < 3) {
        cm.sendOk("在我認為是不朽的沉睡之後，我終於找到了一個可以拯救沙裡安的人，通往下一區域的入口已經開啟。");
        cm.getGuild().gainGP(500);
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
        cm.getPlayer().getMap().getReactorByName("ghostgate").forceHitReactor(1);
        cm.dispose();
        return;
    }
    cm.sendOk("很抱歉，我想與這次公會任務的負責人談話。");
    cm.dispose();
}
