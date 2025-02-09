/*
     名字：隐藏地图
     地图：艾德斯塔公園噴水台附近5
     描述：931050212
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
            ms.spawnNPCRequestController(2153006, 630, -25, 0);
            ms.sendNextS("現在我要打開沙漏，把沙撒在身上，然後念誦咒語。", 5, 2153006);
            break;
        case 1:
            ms.getNPCDirectionEffect(2153006, "Effect/Direction6.img/effect/story/balloonMsg0/2", 2000, 0, -100);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 2:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2153006));
            ms.spawnNPCRequestController(2159334, 630, -25, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159334, "summon"));
            ms.getNPCDirectionEffect(2159334, "Effect/Summon.img/6", 800, 0, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 800));
            break;
        case 3:
            ms.sendNextS("這次我的樣子變了，對吧？", 5, 2159334);
            break;
        case 4:
            ms.sendNextS("#b祝賀你。這次好像成功了。#k", 17);
            break;
        case 5:
            ms.sendNextS("哇！！成功了！終於成功了！！", 5, 2159334);
            break;
        case 6:
            ms.sendNextS("#b看到那個樣子，讓我想起了過去的事。#k", 17);
            break;
        case 7:
            ms.sendNextS("嗯……#h0#，其實我一直有句話想跟你說。", 5, 2159334);
            break;
        case 8:
            ms.sendNextS("#h0#，從你一開始救我的時候，我就一直在想……", 5, 2159334);
            break;
        case 9:
            ms.sendNextS("#b？？？#k", 17);
            break;
        case 10:
            ms.sendNextS("#h0#，沒想到……", 5, 2159334);
            break;
        case 11:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159334));
            ms.spawnNPCRequestController(2153006, 630, -25, 0);
            ms.getNPCDirectionEffect(2153006, "Effect/Summon.img/6", 800, 0, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 800));
            break;
        case 12:
            ms.sendNextS("#b？？？？你又變回原來的樣子了。請繼續說。#k", 17);
            break;
        case 13:
            ms.getNPCDirectionEffect(2153006, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", 2000, 0, -100);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 14:
            ms.sendNextS("哈……哈哈哈……沒想到會有孩子喜歡你，可愛的小孩子。", 5, 2153006);
            break;
        case 15:
            ms.sendNextS("#b原來是這樣啊。如果是過去的我，孩子們應該不會喜歡。我也變了嗎？#k", 17);
            break;
        case 16:
            ms.sendNextS("那……那我們回去吧？今天的實驗很成功。雖然持續的時間有點短……", 5, 2153006);
            break;
        case 17:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2153006));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.dispose();
    }
}
