/*
     名字：人質
     地图：高山坡地
     描述：600010400
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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28766)).getStatus() > 0 || cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28749)).getStatus() < 1) {
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getPosition().x > 1030 || cm.getPlayer().getPosition().y > -1127) {
                cm.sendOk("距離太遠了……需要靠近一些。");
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 1:
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("快速連按Ctrl鍵打碎鎖"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/guide1/0", 5000, 0, -200, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 2:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 352));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 3:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 352));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 4:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 352));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 5:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/fire", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 352));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 6:
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("鎖被你打碎了"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 7:
            cm.sendNextS("用這個返回卷軸回新葉城去！", 3);
            break;
        case 8:
            cm.sendNextS("謝謝你救了我！", 1);
            break;
        case 9:
            Packages.server.quest.MapleQuest.getInstance(28766).forceStart(cm.getPlayer(), 0, null);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            cm.dispose();
    }
}
