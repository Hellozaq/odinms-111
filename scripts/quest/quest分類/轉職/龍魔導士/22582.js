/*
     名字：秘密團體的第三個任務
     地图：青蛙嘴的家
     描述：922030000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("我要交給你的第三個任務是收集秘密的幽魂發條熊隊長的靈魂。打獵在玩具城鐘塔深處的幽魂發條熊隊長，偶爾可以獲得的靈魂，你只要收集#b100個#k交給我就可以了。");
            break;
        case 1:
            qm.sendNextPrev("我會一直待在這個地方，你只要來這裡找我就行了。…話說，你飼養的蜥蜴的外形非常奇特啊！！就像一隻龍………。不過，應該不可能是龍吧。");
            break;
        case 2:
            qm.sendAcceptDecline("好吧，我可以把你送到有幽魂發條熊隊長的地方去，你想現在去#b#m922030002##k嗎？");
            break;
        case 3:
            if (qm.getMap(922030002).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(22582).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(922030002).resetFully();
                qm.getPlayer().changeMap(qm.getMap(922030002), qm.getMap(922030002).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(1200, qm.getMap(922030000));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "靈魂們的遊樂場目前擁擠，請稍後再試"));
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendYesNo("任務好像完成啦，讓我看看你收集到的秘密的幽魂發條熊隊長的靈魂吧。");
            break;
        case 1:
            qm.sendNextPrev("呵呵……很好！這樣的話，就可以執行我們的計畫了……");
            break;
        case 2:
            qm.sendNextPrevS("喂……我有個問題……");
            break;
        case 3:
            qm.sendNextPrev("不好意思，因為要處理你收集到的秘密的幽魂發條熊隊長的靈魂，我現在很忙，你能在我完成處理工作之後再來找我嗎？好像需要花費一點時間……");
            break;
        case 4:
            qm.sendPrevS("到人跡罕至的钟塔深處捕捉怪物，會對別人有什麼幫助嗎？雖然很想問他，但他看起來好像很忙，過一會兒再來找他吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 44669 exp", 3);
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(22582).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4000594, -100);
            qm.gainExp(44669);
            qm.dispose();
    }
}
