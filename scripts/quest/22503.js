/*
     名字：一口豬肉
     地图：寶貝龍
     描述：寶貝龍
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
                qm.sendOk("你怎麽能這樣餓死我呢？我只是個孩子，這是錯誤的！");
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
            qm.sendNext("不，不，不，這不是我需要的，我需要更有營養的東西，主人！");
            break;
        case 1:
            qm.sendNextPrevS("Hm.…所以你不是食草動物，你可能是食肉動物，畢竟你是一條龍，豬肉怎麽樣？");
            break;
        case 2:
            qm.sendAcceptDecline("豬肉是什麽？從來沒有聽說過，但如果它好吃，我接受！快給我去找點吃的～除了草！");
            break;
        case 3:
            qm.sendPrevS("試試給寶貝龍一些豬肉，必須去農場裏打獵幾頭豬，十塊豬肉應該就可以了…", 3);
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(22503).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
