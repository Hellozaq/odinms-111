/*
     名字：隱藏地圖
     地图：艾德斯塔公園噴水台附近4
     描述：931050211
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
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            ms.spawnNPCRequestController(2153006, 630, -40, 0);
            ms.sendNextS("我來試試這個藥水。", 5, 2153006);
            break;
        case 1:
            ms.getNPCDirectionEffect(2153006, "Effect/Direction6.img/effect/story/balloonMsg0/0", 2000, 0, -100);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 2:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2153006));
            ms.spawnNPCRequestController(2159333, 630, -70, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159333, "summon"));
            ms.getNPCDirectionEffect(2159333, "Effect/Summon.img/6", 800, 0, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 800));
            break;
        case 2:
            ms.sendNextS("成……成功了！手……腳……全都恢復正常了，對吧？", 5, 2159333);
            break;
        case 3:
            ms.sendNextS("#b嗯……但是……#p2159307#……你恢復的是過去時候的樣子嗎？#k", 17);
            break;
        case 4:
            ms.sendNextS("嗯嗯嗯？？我變成了你的樣子？？到底是怎麼回事……", 5, 2159333);
            break;
        case 5:
            ms.getNPCDirectionEffect(2159333, "Effect/Direction6.img/effect/story/balloonMsg2/0", 2000, 0, -100);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 6:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159333));
            ms.spawnNPCRequestController(2153006, 630, -40, 0);
            ms.getNPCDirectionEffect(2153006, "Effect/Summon.img/6", 800, 0, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 800));
            break;
        case 7:
            ms.sendNextS("幸虧效果似乎不會持續太久。可以變回原來樣子的傳聞，看來是假的。", 17);
            break;
        case 8:
            ms.sendNextS("(還好沒有發覺……)……好了，回去吧。快點。", 5, 2153006);
            break;
        case 9:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2153006));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.dispose();
    }
}
