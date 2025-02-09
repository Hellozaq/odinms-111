/*
     名字：隱藏地圖
     地图：艾德斯塔公園噴水台附近3
     描述：931050210
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
            ms.spawnNPCRequestController(2153006, 638, -24, 0);
            ms.sendNextS("這似乎是加強威力的鐳射槍…嗯嗯…我也不清楚。", 5, 2153006);
            break;
        case 1:
            ms.sendNextS("似乎已經完成了，我就發射看看好了", 5, 2153006);
            break;
        case 2:
            ms.getNPCDirectionEffect(2153006, "Effect/Summon.img/6", 800, 0, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 800));
            break;
        case 3:
            ms.sendNextS("#b(不管怎麼想，我都認為那並非好主意…)", 17);
            break;
        case 4:
            ms.sendNextS("啊啊！", 5, 2153006);
            break;
        case 5:
            ms.sendNextS("！！(暈倒了)…振作點！！", 17);
            break;
        case 6:
            ms.sendNextS("嗚嗚……成功了嗎？", 5, 2153006);
            break;
        case 7:
            ms.sendNextS("別說是成功了，被光線擊中後就失去意識了。", 17);
            break;
        case 8:
            ms.sendNextS("啊…失敗了嗎…但是我不會就此放棄的！", 5, 2153006);
            break;
        case 9:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.dispose();
    }
}
