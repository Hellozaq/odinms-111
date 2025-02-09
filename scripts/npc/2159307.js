/*
     名字：莫斯提馬
     地图：時間神殿迴廊1
     描述：927000000
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
            cm.sendNextS("軍團長！你刚刚在哪裡？", 1);
            break;
        case 1:
            cm.sendNextPrevS("現在的情况很令人生氣，明明你才是抓住時間女神的人，那個傢伙只是設法蒙蔽了她，但他認為所有的功勞都應該是他的！！！", 1);
            break;
        case 2:
            cm.sendNextPrevS("你沒事吧？你看起來有點不一樣，每當我說起這些事情的時候你都會訓我，但是現在，嘿，你看起來不太好，發生什麼事了嗎，你受傷了嗎？", 1);
            break;
        case 3:
            cm.sendNextPrevS("……告訴我，莫斯提馬，你為誰效忠？是我，還是黑魔法師？", 3);
            break;
        case 4:
            cm.sendNextPrevS("什麼？", 1);
            break;
        case 5:
            cm.sendNextPrevS("回答我！", 3);
            break;
        case 6:
            cm.sendNextPrevS("雖然我對黑魔法師很忠誠，但是我們一起出生入死，你還救過我，我聽你的。", 1);
            break;
        case 7:
            cm.sendNextPrevS("我想請你幫個忙，把這封信交給英雄們。", 3);
            break;
        case 8:
            cm.sendNextPrevS("什麼？為什麼？你在想什麼？你想讓事情更糟嗎？一旦有人發現你想和英雄們交流，你軍團長的位子就沒了！", 1);
            break;
        case 9:
            cm.sendNextPrevS("我已經當夠了軍團長。", 3);
            break;
        case 10:
            cm.sendNextPrevS("什麼？你在背叛黑魔法師嗎？你為什麼這麼做？", 1);
            break;
        case 11:
            cm.sendNextPrevS("沒時間解釋了，請照我說的做。", 3);
            break;
        case 12:
            cm.sendNextPrevS("我會的，我只是擔心，你的家人呢？", 1);
            break;
        case 13:
            cm.sendNextPrevS("別再提我的家人了！", 3);
            break;
        case 14:
            cm.sendNextPrevS("什麼？他們已經出事了嗎？", 1);
            break;
        case 15:
            cm.sendNextPrevS("。。。。。。", 3);
            break;
        case 16:
            cm.sendNextPrevS("我懂了，你一直都是沉默寡言，但有時沉默本身就說明了問題，好吧，我會把這封信給英雄們。", 1);
            break;
        case 17:
            cm.sendNextPrevS("謝謝你，很抱歉向你提出這樣的要求。", 3);
            break;
        case 18:
            cm.sendNextPrevS("別難過，畢竟，你還救過我的命呢。好吧，我要走了，祝你好運。", 1);
            break;
        case 19:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.setNPCSpecialAction(2159307, "teleportation"));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1200));
            break;
        case 20:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2159307));
            cm.sendNextS("你的忠誠對我意義重大，謝謝你。", 3);
            break;
        case 21:
            cm.dispose();
            cm.getPlayer().changeMap(cm.getMap(927000080), cm.getMap(927000080).getPortal(0));
    }
}
