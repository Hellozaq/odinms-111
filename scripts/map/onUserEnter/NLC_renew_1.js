/*
     名字：馬萊尼西亞島
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
            ms.dispose();
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
            if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28746)).getStatus() != 1) {
                ms.dispose();
                return;
            }
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 11000));
            break;
        case 1:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 4));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 4000, 300, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien2/0", 4000, 200, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 3000, 300, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 5000));
            break;
        case 2:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            ms.sendNextS("哇哦，這是什麼啊！早知道就帶個照相機來了？！", 3);
            break;
        case 3:
            ms.sendNextS("外星人基地？它們肯定是想……入侵楓之谷！我要去警告大家！", 3);
            break;
        case 4:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            var tick = 0;
            schedule = Packages.server.Timer.EtcTimer.getInstance().register(function () {
                if (tick == 1) {
                    ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28746)).setCustomData(1);
                    ms.getPlayer().updateQuest(ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28746)), true);
                    schedule.cancel(true);
                    ms.dispose();
                    return;
                }
                tick++;
            }, 3000);
    }
}
