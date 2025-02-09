/*
     名字：勇者亞邁斯
     地图：階段 4 - 終極悍將
     描述：670010500
 */

function start() {
    eim = cm.getPlayer().getEventInstance();
    switch (cm.getPlayer().getMap().getId()) {
        case 670010500:
            if (eim.getProperty("stage3") == null) {
                if (cm.getPlayer().itemQuantity(4031597) < 50) {
                    cm.sendOk("歡迎來到階段 4 - 終極悍將，在這個階段，整個小組需要從#b附近怪物那裡幫我收集50個#k#z4031597#。目前： #c4031597#");
                    cm.dispose();
                    return;
                }
                cm.gainItem(4031597, -50);
                eim.setProperty("stage3", 1);
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate", 2));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                cm.sendOk("通往下一階段的傳送門已經打開，請前往下一階段。");
                cm.dispose();
                return;
            }
            cm.sendOk("通往下一階段的傳送門已經打開，請前往下一階段。");
            cm.dispose();
            break;
        case 670010600:
            if (eim.getProperty("stage4") == null) {
                cm.sendOk("到這兒來真是太容易了，是嗎？不管怎樣，你是這個階段的第一名，在這一階段的任務：生存！");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                eim.setProperty("stage4", 0);
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("通過這扇門，將要面對最偉大的魔法巴洛古，請耐心等待小組組長的安排。");
                cm.dispose();
                return;
            }
            cm.sendYesNo("通過這扇門，將要面對最偉大的魔法巴洛古，你做好心理準備了嗎。");
            break;
        case 670010700:
            cm.sendOk("歡迎來到階段 6 - 愛情創傷，這是最後的挑戰任務，請消滅#b魔法巴洛古#k，完成之後就可以進入獎勵階段哦。");
            cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.warpParty(670010700, 13);
    cm.dispose();
}
