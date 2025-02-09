/*
     名字：船長
     地图：維多利亞島
     描述：3000000
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
            cm.spawnNPCRequestController(1096000, 2209, -107, 0);
            cm.spawnNPCRequestController(1096001, 2046, -62, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 3000));
            break;
        case 1:
            cm.sendNextS("你為什麼要離開這裡，到維多利亞島去？從這裡去維多利亞的人並不多……而且看你的打扮，好像不是單純去旅行的。", 1);
            break;
        case 2:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face03"));
            cm.sendNextPrevS("想到維多利亞去繼續修煉，聽說在那裡修煉之後，就能成為帥氣的冒險家。", 3);
            break;
        case 3:
            cm.sendNextPrevS("哦，你知道得很清楚嘛，為了成為冒險家，第一步最好在維多利亞港開始，那裡有很多其他地方來的新手，可以和他們交朋友，同時那裡也沒什麼危險的怪物。但是在這之後才是冒險的真正開始，在維多利亞島外的其它區域，到處都是你難以想像的強大怪物。", 1);
            break;
        case 4:
            cm.sendNextPrevS("強大的怪物！那是成為帥氣冒險家的必要條件，只要勤於修行，就可以讓自己變得更強，囙此我一定要努力修煉。在出發之前，我做了很多功課，我是有準備的冒險家，哈哈哈！", 3);
            break;
        case 5:
            cm.sendNextPrevS("哦，還挺有自信的，是的，決心是最最重要的。但是不管發生什麼事，只要牢記不入虎穴，焉得虎子這句俗話，就可以戰勝一切困難。", 1);
            break;
        case 6:
            cm.sendNextPrevS("等等……？你有沒有聽到什麼聲音？我感覺到了奇怪的氣息……這裡應該是沒有怪物的和平海域啊……小心！", 3);
            break;
        case 7:
            cm.spawnNPCRequestController(1096011, 2000, -20, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/summon", 4));
            cm.getNPCDirectionEffect(1096011, "Effect/Summon.img/15", 2000, 0, -100);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 8:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(1096000));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(1096001));
            cm.spawnNPCRequestController(1096002, 2108, -82, 0);
            cm.spawnNPCRequestController(1096008, 2000, -20, 1);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getNPCDirectionEffect(1096008, "Effect/Direction4.img/effect/cannonshooter/balog/0", 2000, 0, -200);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 9:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(1096008, "attack2"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 10:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(1096008, "attack1"));
            cm.getNPCDirectionEffect(1096002, "Effect/Direction4.img/effect/cannonshooter/npc/0", 2000, 0, -160);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 11:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction4.img/effect/cannonshooter/User/0", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 12:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 150));
            break;
        case 13:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 14:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face02"));
            cm.getNPCDirectionEffect(1096002, "Effect/Direction4.img/effect/cannonshooter/npc/1", 2000, 0, -160);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 15:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face02"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction4.img/effect/cannonshooter/User/1", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 16:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face05"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 100));
            break;
        case 17:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face05"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(1096008, "attack2"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/Attack1", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 100));
            break;
        case 18:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face05"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 19:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face05"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(1096008, "attack1"));
            cm.getNPCDirectionEffect(1096008, "Effect/Direction4.img/effect/cannonshooter/balog/0", 2000, 0, -200);
            cm.getNPCDirectionEffect(1096008, "Mob/8150000.img/attack2/info/effect", 1000, 0, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/Attack1", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 20:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction4.img/effect/cannonshooter/User/2", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Mob/8150000.img/attack2/info/hit", 0, 0, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 6));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 21:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face02"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 22:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face02"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(1096008, "attack2"));
            cm.getNPCDirectionEffect(1096008, "Mob/8130100.img/attack1/info/effect", 1000, 0, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 23:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face02"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Mob/8130100.img/attack1/info/hit", 0, 0, 0, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/Attack1", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 6));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 24:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face01"));
            cm.getNPCDirectionEffect(1096008, "Mob/8130100.img/attack1/info/effect", 1000, 0, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 25:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 26:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 27:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 28:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 29:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 30:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 150));
            break;
        case 31:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 32:
            cm.getNPCDirectionEffect(1096008, "Effect/Direction4.img/effect/cannonshooter/balog/1", 2000, 0, -200);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 300));
            break;
        case 33:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(1096008, "attack"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("cannonshooter/Attack2", 4));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction4.img/effect/cannonshooter/User/3", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 34:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face02"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 35:
            cm.dispose();
            cm.getPlayer().changeMap(cm.getMap(912060100), cm.getMap(912060100).getPortal(0));
    }
}
