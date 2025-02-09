/*
     名字：捉拿小偷！
     地图：瑞恩村
     描述：140000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21301)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21301).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("野烏鴉抓到了嗎？呵呵呵…果然是我的主人！很好，那麼將帶來的紅珠玉交出來！我會重新放在本體上…咦…？為什麼不回答？該不會…忘記帶回來了吧？");
            break;
        case 1:
            qm.sendNextPrev("什麼？你真的沒拿回紅珠玉？為什麼？該不會是真的忘了吧？啊啊！怎麼會這樣…就算被黑魔法師詛咒，經過了這麼久冰雪封印都解除了，健忘症倒是還沒解除啊……");
            break;
        case 2:
            qm.sendNextPrev("不行。真的太不像話了。這個時候我更應該代替主人打起精神…呼呼…呼呼……");
            break;
        case 3:
            qm.sendNextPrev("再去看看，反正小偷已經逃走了。那麼就重新製作紅珠玉吧！之前曾經做過一次，你知道材料吧？好吧！那麼快去蒐集材料吧.....");
            break;
        case 4:
            qm.sendNextPrev("#v4001173#");
            break;
        case 5:
            qm.sendNextPrev("材料也沒有，而且還不知道怎麼做……沒有夢也沒有希望。啊啊啊！");
            break;
        case 6:
            qm.sendPrevS("瑪哈開始大發雷霆。先逃離這裡再說。莉琳可能可以幫我。", 3);
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(21301).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
