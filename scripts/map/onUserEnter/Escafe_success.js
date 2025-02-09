/*
     名字：外星基地
     地图：逃生路線
     描述：610040700
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
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2500));
            break;
        case 1:
            ms.spawnNPCRequestController(9201174, 700, -611, 0);
            ms.spawnNPCRequestController(9201054, -600, -611, 0);
            ms.spawnNPCRequestController(9201094, -700, -611, 0);
            ms.getNPCDirectionEffect(9201174, "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 2000, 0, -100);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 2:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien/0", 1500, 200, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien/0", 1500, 250, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien/0", 1500, 300, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien/0", 1500, 350, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien/0", 1500, 400, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien/0", 1500, 450, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien/0", 1500, 500, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction.img/effect/NLC/alien/0", 1500, 550, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 1000, 200, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 3:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/Attack3", 4));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/211.img/skill/2111002/effect", 0, 200, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/211.img/skill/2111002/effect", 0, 250, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/211.img/skill/2111002/effect", 0, 300, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/211.img/skill/2111002/effect", 0, 350, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/211.img/skill/2111002/effect", 0, 400, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/211.img/skill/2111002/effect", 0, 450, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/211.img/skill/2111002/effect", 0, 500, 0, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/211.img/skill/2111002/effect", 0, 550, 0, 1));
            ms.getNPCDirectionEffect(9201174, "Skill/211.img/skill/2111002/effect", 0, 0, -100);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 100, 200, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 700));
            break;
        case 4:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(9201174));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 5:
            ms.sendNextS("你沒事吧？抱歉來遲了，但我們來救你了！", 5, 9201054);
            break;
        case 6:
            ms.sendNextS("我們也來幫忙！快點兒過來！", 5, 9201094);
            break;
        case 7:
            ms.sendNextS("你們怎麼才來？！我的腦子差點被外星人吃了！", 17);
            break;
        case 8:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 3000));
            break;
        case 9:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            ms.sendNextS("謝謝你救了我，剛才朝你大吼大叫的，真是抱歉……", 17);
            break;
        case 10:
            ms.sendNextS("沒關係，害怕是人之常情嘛。再說了，你為我們做了這麼多，這是我們欠你的。", 5, 9201094);
            break;
        case 11:
            ms.sendNextPrevS("嗯，謝啦。我沒受傷，就是嚇得不輕。", 17);
            break;
        case 12:
            ms.sendNextPrevS("沒關係，害怕是人之常情嘛。再說了，你為我們做了這麼多，這是我們欠你的。", 5, 9201094);
            break;
        case 13:
            ms.sendNextPrevS("至少它們沒把你洗腦，讓你以為你已經逃了出來，其實你還困在它們的實驗室裡頭呢！", 5, 9201094);
            break;
        case 14:
            ms.sendNextPrevS("哈！開玩笑啦。你還是去見下市長吧？他可喜歡科幻故事了。我就先走了！", 5, 9201054);
            break;
        case 15:
            ms.sendNextPrevS("等會兒！這真的是現實嗎？難道是我的幻覺？！", 17);
            break;
        case 16:
            ms.sendNextPrevS("哈哈哈，別傻了。回見，小笨蛋！", 5, 9201094);
            break;
        case 17:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 2000, 0, -100, 1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 3000));
            break;
        case 18:
            ms.dispose();
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.getPlayer().changeMap(ms.getMap(600000000), ms.getMap(600000000).getPortal(0));
    }
}
