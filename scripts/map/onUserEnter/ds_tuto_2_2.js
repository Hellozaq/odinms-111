/*
     名字：隱藏地圖
     地图：黑色魔法師的房前迴廊2
     描述：927000070
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
            ms.spawnNPCRequestController(2159309, 500, 50, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 30));
            break;
        case 1:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            ms.sendNextS("你的實力總是讓我大吃一驚啊…其實這不是個很好的機會嗎？我一直都想和軍團長一決高下。來，比比你的氣場和我的魔法誰更強！", 5, 2159309);
            break;
        case 2:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/9", 2000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/3112.img/skill/31121000/effect", 2000, 321, 83, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/31121000", 4));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 374));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 3:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/31121000h", 4));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159309, "teleportation"));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 570));
            break;
        case 4:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159309));
            ms.spawnNPCRequestController(2159309, 620, 50, 0);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159309, "summon"));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 5:
            ms.sendNextS("挺有本事的嘛…有意思，哈哈哈哈！", 5, 2159309);
            break;
        case 6:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159309, "resolve"));
            ms.getNPCDirectionEffect(2159309, "Effect/Direction6.img/effect/tuto/balloonMsg1/10", 2000, 0, -160);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 7:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/11", 2000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 8:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/3112.img/skill/31121005/effect", 2000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/3112.img/skill/31121005/effect0", 2000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/31121005", 4));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 364)); //角色效果
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 9:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/gateOpen/0", 2100, 918, -195, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/gateLight/0", 2100, 926, -390, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/gateStair/0", 2100, 879, 30, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/openGate", 4));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 10:
            Packages.server.quest.MapleQuest.getInstance(23203).forceStart(ms.getPlayer(), 0, null); //打開門的效果
            ms.getNPCDirectionEffect(2159309, "Effect/Direction6.img/effect/tuto/balloonMsg0/0", 2000, 0, -150);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1200));
            break;
        case 11:
            ms.sendNextS("…哦哦，黑魔法師大人要親自會會你了。雖然可惜，但今天就到此為止吧。我要去給那些叫英雄的傢夥們露露臉了。", 5, 2159309);
            break;
        case 12:
            ms.sendNextS("我應該不用再見到你了，能被大人親手殺死，這是你的榮耀！哈哈哈哈！", 5, 2159309);
            break;
        case 13:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159309, "teleportation"));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 570));
            break;
        case 14:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159309));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg2/2", 2000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 15:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/whiteOut", 3));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 16:
            ms.dispose();
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.getPlayer().changeMap(ms.getMap(931050300), ms.getMap(931050300).getPortal(0));
    }
}
