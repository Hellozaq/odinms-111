/*
     名字：首領
     地图：沙漠的角落1
     描述：926030000
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
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            cm.spawnNPCRequestController(2159324, 500, 260, 1);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 700));
            break;
        case 1:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3", 2000, 0, -100, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1500));
            break;
        case 2:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.sendNextS("雖然中途出現了妨礙者，但是找到了煉金書的另一半。", 5, 2159324);
            break;
        case 3:
            cm.sendNextPrevS("#b(聽不到在說什麼。)#k", 3);
            break;
        case 4:
            cm.sendNextPrevS("該死！！好像有個倒楣鬼跟著你來了！！", 1);
            break;
        case 5:
            cm.sendNextPrevS("#b(被發現了嗎……)#k", 3);
            break;
        case 6:
            cm.sendNextPrevS("讓我看看你的臉。快出來吧！不要因為醜就害羞！", 1);
            break;
        case 7:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.NPCSpecialAction(2159324, -1, 2, 100));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1400));
            break;
        case 8:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 100));
            break;
        case 9:
            cm.sendNextS("那個傢伙是……剛才的妨礙者！力量相當強。", 5, 2159324);
            break;
        case 10:
            cm.sendNextPrevS("#b你們好像是想通過傳送口逃走，但是我好像先到了一步。你能把煉金書還給我嗎？#k", 3);
            break;
        case 11:
            cm.sendNextPrevS("別開玩笑！為了得到這個東西，你知道我們付出了多少努力？你這個無恥的惡徒！", 1);
            break;
        case 12:
            cm.sendNextPrevS("#b等等……那個好像不是你們的臺詞吧……#k", 3);
            break;
        case 13:
            cm.sendNextPrevS("如果不能把它交給阿卡伊農的話，我們就會吃不了兜著走！你能理解我們這些底層部下的悲哀嗎。", 5, 2159325);
            break;
        case 14:
            cm.sendNextPrevS("阿卡伊農？你們是黑魔法師的手下嗎？阿卡伊農想用禁忌煉金書幹什麼！？#k", 3);
            break;
        case 15:
            cm.sendNextPrevS("你以為我會告訴你嗎！", 5, 2159324);
            break;
        case 16:
            cm.sendNextPrevS("阿卡伊農是個喜歡策劃陰謀的卑鄙傢夥。你們應該比我更清楚。#k", 3);
            break;
        case 17:
            cm.sendNextPrevS("不許侮辱阿卡伊農！他不像凡雷恩那樣不冷不熱！這個東西，本來就是那個偉大的人的。", 1);
            break;
        case 18:
            cm.sendNextPrevS("如果這次的事情能成功，就能清除掉所有封印石，讓那個偉大的人復活！", 5, 2159324);
            break;
        case 19:
            cm.sendNextPrevS("我們不要在說這麼多廢話了……既然這樣，就只能把他幹掉了，孩子們！上！", 1);
            break;
        case 20:
            cm.dispose();
            cm.getMap(926030010).resetFully();
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            cm.getPlayer().changeMap(cm.getMap(926030010), cm.getMap(926030010).getPortal(0));
    }
}
