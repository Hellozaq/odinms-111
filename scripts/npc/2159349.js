/*
     名字：傑利麥勒
     地图：傑利麥勒實驗室入口
     描述：931000650
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
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 1:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 2:
            cm.sendNextS("從這邊開始調查嗎？……或者那邊？……！聲音……！有人在嗎？！", 3);
            break;
        case 3:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 4000));
            break;
        case 4:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 100));
            break;
        case 5:
            cm.sendNextS("(傑利麥勒！……還有誰？陌生的面孔……在這裡好像看不太清楚。要去聽聽他們在說什麼嗎……？)", 3);
            break;
        case 6:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1200));
            break;
        case 7:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 100));
            break;
        case 8:
            cm.sendNextS("我不是說您不用特地跑到這裡來嗎？呵呵，您的脾氣還是那麼急。請別擔心，實驗材料很豐富，很快就能完成了。", 1);
            break;
        case 9:
            cm.sendNextPrevS("你說的遲早到底是什麼時候？我不是說了不想再等下去嗎？阿卡伊農都已經出面了！這樣下去我和史烏要墊底了！不是說那個叫斐勒還是什麼的……只要他成功就行了嗎？", 5, 1033230);
            break;
        case 10:
            cm.sendNextPrevS("(斐勒……)", 3);
            break;
        case 11:
            cm.sendNextPrevS("我以為是那樣的，不過出了點差錯…要製作出殺人鯨大人所說的那種強大生物並不容易啊。不過馬上就能完成了。", 1);
            break;
        case 12:
            cm.sendNextPrevS("當然要完美的完成啊……我建立黑色翅膀，還雇傭你這個瘋老頭都是為了這件事！", 5, 1033230);
            break;
        case 13:
            cm.sendNextPrevS("(建立黑色翅膀的也是？！)", 3);
            break;
        case 14:
            cm.sendNextPrevS("您建立黑色翅膀也是因為這個嗎？", 1);
            break;
        case 15:
            cm.sendNextPrevS("你以為還會有其它的理由嗎？哈，真是的，我到底要等多少年才行啊。慢得像蝸牛一樣……沒一個讓人滿意的！沒一個！", 5, 1033230);
            break;
        case 16:
            cm.sendNextPrevS("呵呵呵……既然都等了幾年，那不妨多等一點時間。只要完成了，殺人鯨大人和史烏大人就能獲得比以前還要強大的力量。", 1);
            break;
        case 17:
            cm.sendNextPrevS("(到底再製作什麼東西啊…？是一種擁有強大力量的東西嗎……)", 3);
            break;
        case 18:
            cm.sendNextPrevS("哼！……咦？這是什麼聲音？", 5, 1033230);
            break;
        case 19:
            cm.sendNextPrevS("聲音……？好像……我耳朵不太好，聽不太清楚……", 1);
            break;
        case 20:
            cm.sendNextPrevS("不對，我聽到什麼聲音了……是那邊嗎？難道是入侵者？聽說不久前就有人入侵過這裡……傑利麥勒…你要是做不好，我第一個幹掉你。", 5, 1033230);
            break;
        case 21:
            cm.sendNextPrevS("(哎呀……再聽下去就要被發現了，還是出去吧。)", 3);
            break;
        case 22:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            cm.getPlayer().changeMap(cm.getMap(310040210), cm.getMap(310040210).getPortal(2));
            var tick = 0;
            schedule = Packages.server.Timer.EtcTimer.getInstance().register(function () {
                if (tick == 1) {
                    Packages.server.quest.MapleQuest.getInstance(23150).forceStart(cm.getPlayer(), 0, 1);
                    schedule.cancel(true);
                    cm.dispose();
                    return;
                }
                tick++;
            }, 3000);
    }
}
