/*
     名字：阿卡伊農
     地图：黑色魔法師的房前迴廊1
     描述：927000020
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
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
                num = 3 - cm.getPlayer().getMap().getAllMonstersThreadsafe().size();
                for (var i = 0; i < num; i++)
                    cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300455), new java.awt.Point(298, 71));
                cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
                Packages.server.quest.MapleQuest.getInstance(23205).forceStart(cm.getPlayer(), 0, null);
                cm.dispose();
                return;
            }
            cm.sendNextS("你的旅行怎麼樣，不服從命令值得嗎，你的家人怎麼樣，嘿嘿。", 1);
            break;
        case 1:
            cm.sendNextS("我沒有時間陪你，讓開。", 3);
            break;
        case 2:
            cm.sendNextS("擅離職守，違抗命令…還用這種充滿殺氣的眼神盯著我，還想見黑魔法師？那可不行。", 1);
            break;
        case 3:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/14", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/31111003", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 373)); //角色攻擊
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/3111.img/skill/31111003/effect", 0, 100, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159309, "teleportation"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 570));
            break;
        case 4:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159309));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1200));
            break;
        case 5:
            cm.spawnNPCRequestController(2159309, 180, 50, 1); //設置角色方向
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159309, "summon"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 360));
            break;
        case 6:
            cm.sendNextS("你知道，這是叛國，你真的那麼軟弱，以至於失去家人讓你這麼做嗎？", 1);
            break;
        case 7:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/15", 2000, 0, 100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 8:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/31121001", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(0, 370)); //角色攻擊
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Skill/3112.img/skill/31121001/effect", 0, 100, 0, 50));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159309, "summon"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 9:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159309));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 870));
            break;
        case 10:
            cm.spawnNPCRequestController(2159309, 500, 50, 0);
            cm.sendNextS("你讓我失望了，你不瞭解黑魔法師，消滅叛徒！", 1);
            break;
        case 11:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/summonGuard", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction6.img/DemonTutorial/Scene4"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            Packages.server.quest.MapleQuest.getInstance(23205).forceStart(cm.getPlayer(), 0, null);
            Packages.server.quest.MapleQuest.getInstance(23204).forceComplete(cm.getPlayer(), 0);
            for (var i = 0; i < 3; i++)
                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300455), new java.awt.Point(298, 71));
            cm.dispose();
    }
}
