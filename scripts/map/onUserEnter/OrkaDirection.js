/*
     名字：隱藏地圖
     地图：殺人鯨的房間
     描述：931040011
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
            if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24091)).getStatus() == 2) {
                ms.dispose();
                return;
            }
            if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24091)).getStatus() == 1) {
                ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300435), new java.awt.Point(716, 5));
                ms.dispose();
                return;
            }
            ms.getPlayer().getMap().spawnNpc(1033230, new java.awt.Point(716, 5));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 1:
            ms.sendNextS("這是……這種洞穴裡怎麼會有房間…到底是什麼？穆內在哪裡呢？", 17);
            break;
        case 2:
            ms.sendNextPrevS("你還是那麼單純，只要集中於某件事，其它的就看不見了。", 5, 1033230);
            break;
        case 3:
            ms.sendNextPrevS("誰？！", 17);
            break;
        case 4:
            ms.sendNextPrevS("啊？這麼快就吧我忘了？", 5, 1033230);
            break;
        case 5:
            ms.sendNextPrevS("你是……", 17);
            break;
        case 6:
            ms.sendNextPrevS("好久不見，精靈遊俠。", 5, 1033230);
            break;
        case 7:
            ms.sendNextPrevS("黑暗主宰……殺人鯨？！", 17);
            break;
        case 8:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction5.img/mersedesQuest/Scene0"));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 3500));
            break;
        case 9:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.dispose();
    }
}
