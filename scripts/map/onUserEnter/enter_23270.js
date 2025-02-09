/*
     名字：隱藏地圖
     地图：卡帕萊特協會1
     描述：926150000
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
            ms.spawnNPCRequestController(2159324, 340, -10, 1);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159324, "spell"));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 1:
            ms.sendNextS("好了，把禁忌煉金書獻給我，慢慢地～", 5, 2159324);
            break;
        case 2:
            ms.sendNextS("把禁忌煉金書獻出來。把禁忌煉金書獻出來。", 5, 2159320);
            break;
        case 3:
            ms.sendNextS("#b什麼人！！！#k", 17);
            break;
        case 4:
            ms.getNPCDirectionEffect(2159324, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1000, 0, -100);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 5:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.NPCSpecialAction(2159324, -1, 50, 100));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 6:
            ms.sendNextS("你的運氣真不好。要是裝作沒看見的話，應該就能保住性命。", 5, 2159324);
            break;
        case 7:
            ms.sendNextS("#b要看看是誰的運氣不好嗎？#k", 17);
            break;
        case 8:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159324));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300457), new java.awt.Point(260, 6));
            ms.dispose();
    }
}
