/*
     名字：凡雷恩
     地图：見面室
     描述：921110210
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
            cm.spawnNPCRequestController(2159336, 20, -300, 0);
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 3500));
            break;
        case 1:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 2:
            cm.sendNextS("是#h0#嗎？", 1);
            break;
        case 3:
            cm.sendNextPrevS("#b好久不見，#r#p2159336#。#k", 3);
            break;
        case 4:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 5:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 500));
            break;
        case 6:
            cm.sendNextS("你個叛徒到這裡來做什麼。", 1);
            break;
        case 7:
            cm.sendNextPrevS("#b不是我背叛了誰，而是我被人背叛了。我的家人都因為黑魔法師而失去了性命。我的媽媽和戴米安都是...#k", 3);
            break;
        case 8:
            cm.sendNextPrevS("這樣啊…雖然沒想到那位偉大的大人會那樣，但他那麼做肯定也有他的道理吧。只不過你太愚蠢，無法領會大人的意思。", 1);
            break;
        case 9:
            cm.sendNextPrevS("#b胡說！！#k", 3);
            break;
        case 10:
            cm.sendNextPrevS("呼…我想這不應該是一個失去故鄉，把靈魂出賣給黑魔法師的人應該說的話！#k", 3);
            break;
        case 11:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.NPCSpecialAction(2159336, 1, 3, 100));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 12:
            cm.sendNextS("閉嘴！", 1);
            break;
        case 13:
            cm.sendNextPrevS("好，我們彼此的傷心往事就不要再提了。但總有一天你也會被拋棄的。#p2159336#！！", 3);
            break;
        case 14:
            cm.sendNextPrevS("我已經走得太遠了。你以為就憑一句話就能回到光明世界去嗎？而且，我已經對這個世界沒有任何留戀了。我失去了一切！", 1);
            break;
        case 15:
            cm.sendNextPrevS("你來這裡就是為了說這些沒用的廢話嗎？我想我沒必要再和你這個叛徒說話了。", 1);
            break;
        case 16:
            cm.sendNextPrevS("#b那好，我最後再問一次。你之外的那些軍團長都是怎麼回事？", 3);
            break;
        case 17:
            cm.sendNextPrevS("時間神殿…也許那裡會有你要找的答案…", 1);
            break;
        case 18:
            cm.sendPrevS("現在，你給我滾開，你和我互為敵人。", 1);
            break;
        case 19:
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23272)).setCustomData(1);
            cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23272)), true);
            cm.getPlayer().changeMap(cm.getMap(211060000), cm.getMap(211060000).getPortal(4));
            cm.dispose();
    }
}
