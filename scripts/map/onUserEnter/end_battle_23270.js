/*
     名字：隱藏地圖
     地图：卡帕萊特協會1
     描述：926150010
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
            ms.spawnNPCRequestController(2159320, 430, -10, 0);
            ms.spawnNPCRequestController(2159324, -180, -10, 1);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 1:
            ms.sendNextS("呃……好強……", 5, 2159324);
            break;
        case 2:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.NPCSpecialAction(2159324, -1, 50, 100));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 3:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159324));
            ms.sendNextS("#b(逃走了。受了傷，應該逃不了很遠。先去把煉金書找回來。)#k", 17);
            break;
        case 4:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            ms.sendNextS("煉金書……給你。煉金書……煉金書……", 5, 2159320);
            break;
        case 5:
            ms.sendNextS("#b禿頭！給我醒醒！#k", 17);
            break;
        case 6:
            ms.sendNextS("禿頭！！你說的對，確實是這樣。但是其它的我不管……", 5, 2159320);
            break;
        case 7:
            ms.sendNextS("我最討厭別人說我禿頭了！！", 5, 2159320);
            break;
        case 8:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 2000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 9:
            ms.sendNextS("#b禿頭！快醒醒！煉金書怎麼樣了？？#k", 17);
            break;
        case 10:
            ms.spawnNPCRequestController(2159319, -270, -10, 1);
            ms.sendNextS("#p2159321#！給我醒醒！！", 5, 2159319);
            break;
        case 11:
            ms.dispose();
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.getPlayer().changeMap(ms.getMap(926150020), ms.getMap(926150020).getPortal(0));
            Packages.server.quest.MapleQuest.getInstance(23276).forceStart(ms.getPlayer(), 0, 1);
    }
}
