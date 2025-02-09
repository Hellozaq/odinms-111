/*
     名字：電腦
     地图：叢林山谷
     描述：600010300
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
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28760)).getStatus() > 0 || cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28748)).getStatus() < 1) {
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getPosition().x < 860 || cm.getPlayer().getPosition().x > 1120 || cm.getPlayer().getPosition().y > -1000) {
                cm.sendOk("距離太遠了……需要靠近一些。");
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 1:
            cm.sendNextS("我需要偷走它們收集的樣本！", 3);
            break;
        case 2:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 3:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 318));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 4:
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("樣本竊賊完成"));
            Packages.server.quest.MapleQuest.getInstance(28760).forceStart(cm.getPlayer(), 0, null);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 5:
            cm.sendNextS("哈哈！這真是太好了！", 3);
            break;
        case 6:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 0, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 7:
            cm.sendNextS("呃偶，外星人來了……我得藏起來！", 3);
            break;
        case 8:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 9:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 30));
            break;
        case 10:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 11:
            cm.spawnNPCRequestController(9201174, 1069, -1007, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 12:
            cm.getNPCDirectionEffect(9201174, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1000, 0, -100);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 13:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(9201174));
            cm.spawnNPCRequestController(9201174, 1060, -1007, 1);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 200));
            break;
        case 14:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(9201174));
            cm.spawnNPCRequestController(9201174, 1069, -1007, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 200));
            break;
        case 15:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(9201174));
            cm.spawnNPCRequestController(9201174, 1060, -1007, 1);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 200));
            break;
        case 16:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(9201174));
            cm.spawnNPCRequestController(9201174, 1069, -1007, 0);
            cm.getNPCDirectionEffect(9201174, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", 1000, 0, -100);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 200));
            break;
        case 17:
            cm.sendNextS("我們的樣本哪去了？那可是我花了一整天辛辛苦苦採集來的！克拉貢大人會要了我的命的！", 5, 9201174);
            break;
        case 18:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(9201174));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 19:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 20:
            cm.sendNextS("可惡的外星人！", 3);
            break;
        case 21:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            cm.dispose();
    }
}
