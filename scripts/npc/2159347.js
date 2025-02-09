/*
     名字：斐勒
     地图：礦山入口
     描述：931000620
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
                cm.sendOk("………");
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 1:
            cm.sendNextS("斐勒，醒醒！斐勒！聽見了嗎？！", 3);
            break;
        case 2:
            cm.sendNextPrevS("……(好像暈了過去，怎麼搖都沒有反應。)", 1);
            break;
        case 3:
            cm.getPlayer().getMap().spawnNpc(2159349, new java.awt.Point(2160, 27));
            cm.sendNextPrevS("呵……我命令你快點過來，怎麼連警衛兵都跑來了……有什麼事嗎？……啊哈，有人過來了嗎？", 5, 2159349);
            break;
        case 4:
            cm.sendNextPrevS("實驗體竟然還交朋友？挺能幹的嘛……呵呵！", 5, 2159349);
            break;
        case 5:
            cm.sendNextPrevS("……傑利麥勒！你在對斐勒幹什麼！？", 3);
            break;
        case 6:
            cm.sendNextPrevS("那個東西只是完成了自己的功能而已。他執行了到這裡來的命令，正在等待下一個命令。", 5, 2159349);
            break;
        case 7:
            cm.sendNextPrevS("功能……？命令……？你在說什麼啊！斐勒不是東西！", 3);
            break;
        case 8:
            cm.sendNextPrevS("不錯……不是東西。而是實驗體。經過洗腦，只會按照命令行動的實驗體。", 5, 2159349);
            break;
        case 9:
            cm.sendNextPrevS("！！(斐勒……被洗腦了？這麼說……)", 3);
            break;
        case 10:
            cm.sendNextPrevS("洗腦效果快要解開了，所以想把他回收回來，沒想到釣到了這樣的大魚……這可怎麼辦呢……放過的話就太可惜了，那樣的話一定會被伊培賀罵的……對了！要試試實驗體交的朋友怎麼樣嗎？", 5, 2159349);
            break;
        case 11:
            cm.sendNextPrevS("你在說什麼啊！", 3);
            break;
        case 12:
            cm.sendNextPrevS("我們來賭一下。實驗體對你來說很重要吧？那我就把他送給你，沒什麼捨不得的。但是不能就這樣給你……你沿著礦山小路，到我的實驗室裡來找他吧。那樣我就把他送給你。", 5, 2159349);
            break;
        case 13:
            cm.sendNextPrevS("斐勒不是東西！你別自說自話！快把斐勒放開！", 3);
            break;
        case 14:
            cm.sendNextPrevS("我說了，只要你到礦山小路來，我就放開他。嗯……雖然那裡有很多警衛機器人，但是這點危險你總應該承受吧？如果覺得一個人不行的話，和其他人一起來也沒關係。", 5, 2159349);
            break;
        case 15:
            cm.sendNextPrevS("年紀大了，沒辦法在外面到處走了。好的……再見。", 5, 2159349);
            break;
        case 16:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.removeNpc(cm.getPlayer().getMap().getId(), 2159349);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            var tick = 0;
            schedule = Packages.server.Timer.EtcTimer.getInstance().register(function () {
                if (tick == 1) {
                    Packages.server.quest.MapleQuest.getInstance(23149).forceStart(cm.getPlayer(), 0, 1);
                    schedule.cancel(true);
                    cm.dispose();
                    return;
                }
                tick++;
            }, 3000);
    }
}
