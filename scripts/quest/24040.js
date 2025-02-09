/*
     名字：醒来
     地图：精靈遊俠
     描述：精靈遊俠
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24040)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(24040).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            qm.sendNextS("等等……好像有點奇怪？我的等級是多少？", 3);
            break;
        case 1:
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction5.img/mersedesQuest/Scene2"));
            //qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/questEffect/mercedes/q24040"));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo("Effect/OnUserEff.img/questEffect/mercedes/q24040", 5500, 0, 0, 0));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 7000));
            break;
        case 2:
            qm.sendNextS("10……級？！", 3);
            break;
        case 3:
            qm.sendNextPrevS("……到底是怎麼回事？我的等級……怎麼這麼低？只有10級？10級？不是100級，是10級？我還在做夢嗎？掐一下自己的話，會醒來嗎？啊！", 3);
            break;
        case 4:
            qm.sendNextPrevS("哎呀！不是夢！這是黑魔法師的詛咒的影響嗎？！……呃呃呃……可惡的黑魔法師！本來就沒有任何好感，現在真的是不可原諒！", 3);
            break;
        case 5:
            qm.sendNextPrevS("啊……啊……冷靜，冷靜下來，精靈遊俠。著急也沒用，冷靜地把現在的情况整理一下。", 3);
            break;
        case 6:
            qm.sendNextPrevS("黑魔法師的詛咒沒有消失，從長老們和其他精靈們還困在冰裏來看，這一點可以確認。", 3);
            break;
        case 7:
            qm.sendNextPrevS("醒來的人好像只有我，雖然不知道是為什麼……想到醒來之前感覺到的那個氣息，也許是因為黑魔法師的封印變弱了？", 3);
            break;
        case 8:
            qm.sendNextPrevS("雖然想到外面去看看枫之谷世界的情况，但是不行。因為……我現在等級只有10級，這到底是怎麼回事！我竟然只有10級！", 3);
            break;
        case 9:
            qm.sendNextPrevS("黑魔法師的最後一個詛咒……那個詛咒的影響當然會很大，看來我是太低估了。而且也不知道過了多長時間，被困在冰裏這麼長時間，身體也便僵硬了。", 3);
            break;
        case 10:
            qm.sendNextPrevS("受了傷，又受到詛咒，被困在冰裏這麼長時間，等級變低是當然的事情。當然的事情……怎麼會這樣！快讓我恢復成原來的等級！我精靈遊俠竟然只有10級！", 3);
            break;
        case 11:
            qm.sendPrevS("……呼，呼……冷，冷靜，不是尖叫的時候！先確認一下身體狀態，真的只有10級了嗎？該不會還有傷沒好吧？手脚還能動嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 500 exp", 3);
            break;
        case 12:
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            Packages.server.quest.MapleQuest.getInstance(24040).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().levelUp(); //給予一個等級
            qm.dispose();
    }
}
