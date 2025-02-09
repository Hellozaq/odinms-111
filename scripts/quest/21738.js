/*
     名字：封印庭園
     地图：老婆之屋
     描述：200050001
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("你有什麼事？雖然我並不歡迎不速之客…但你的身上卻散發一種非比尋常的氣息…看來我得聽聽你的事情了......");
            break;
        case 1:
            qm.sendNextPrevS("講述關於#b#o9300347##k的事情。");
            break;
        case 2:
            qm.sendNextPrev("巨大食人花？雖然這的確是個嚴峻的問題…不過到目前為止應該對天空之城還造不成影響。等等，你剛才說#o9300347#在哪兒？");
            break;
        case 3:
            qm.sendNextPrevS("在#m200060001#。");
            break;
        case 4:
            qm.sendNextPrev("人少的散步道？巨大食人花居然在那裡，那麼你是說有人想要入侵#b#m920030001##k？到底為什麼呢？是誰？");
            break;
        case 5:
            qm.sendNextPrevS("#m920030001#？");
            break;
        case 6:
            qm.sendPrev("……你到底是什麼人竟然來問這樣的問題？你先稍等會兒。我要先蔔一卦看你是不是值得信任。");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(21738).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
