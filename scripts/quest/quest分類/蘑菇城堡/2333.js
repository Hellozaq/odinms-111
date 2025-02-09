/*
     名字：陰謀的黑手
     地图：結婚禮堂
     描述：106021600
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("啊！你就是來救我的勇士，我就知道你會來。咳咳咳……");
            break;
        case 1:
            qm.sendNextPrevS("公主還好吧？", 3);
            break;
        case 2:
            qm.sendNextPrevS("嗯，我很好。可是我的父親……我父親還好吧？", 1);
            break;
        case 3:
            qm.sendNextPrevS("是的，菇菇國王和幕僚大臣們都在城外安全的地方。請不要擔心。", 3);
            break;
        case 4:
            qm.sendNextPrevS("臭小子，竟然找到這裡來了，可不要以為已經勝利了！", 5, 1300001);
            break;
        case 5:
            qm.sendNextPrevS("啊！勇士，危險！！！他想召喚出…這件事的幕後主使！", 1);
            break;
        case 6:
            qm.sendNextPrevS("幕後？難道還有什麼人？", 3);
            break;
        case 7:
            qm.sendNextPrevS("閉嘴！他馬上就到了！", 5, 1300001);
            break;
        case 8:
            qm.sendNextPrevS("是總理大臣！勇士，請你擊敗總理大臣！！", 1);
            break;
        case 9:
            Packages.server.quest.MapleQuest.getInstance(2333).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(3300008), new java.awt.Point(292, 133));
            qm.dispose();
    }
}

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
            qm.sendNext("勇士，你做到了，真是太感動了。");
            break;
        case 1:
            qm.sendNextPrevS("咳！！連總理大臣也…", 5, 1300001);
            break;
        case 2:
            qm.sendNextPrevS("企鵝國王，你這傢夥！！！你的野心已經結束了！我會留你一命性命，趕快回到你們的國家。", 3);
            break;
        case 3:
            qm.sendNextPrevS("等等！！！！回去之前要留下證據，以證明已經打敗你了。", 3);
            break;
        case 4:
            qm.sendNextPrevS("呃……", 5, 1300001);
            break;
        case 5:
            qm.sendNextPrevS("把你的王冠留下吧！公主請收下他的王冠。", 3);
            break;
        case 6:
            qm.sendNextPrevS("該死的…憤怒…給我記住，我不會忘記這屈辱的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15000 exp", 5, 1300001);
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(2333).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(106021700), qm.getMap(106021700).getPortal(0));
            qm.gainExp(15000);
            qm.dispose();
    }
}
