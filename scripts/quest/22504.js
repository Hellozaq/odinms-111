/*
     名字：好吃的牛奶1
     地图：農場中心地
     描述：100030300
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
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
            qm.sendNext("唉。我餓得快不行了。我需要吃別的東西，除了草和肉之外……難道沒有了嗎？主人，你比我年紀大，知道的應該比我多啊？");
            break;
        case 1:
            qm.sendNextPrevS("話是這麼說，但我也不知道……又不是年紀大知道的就一定多……");
            break;
        case 2:
            qm.sendAcceptDecline("但是年紀大的話，肯定會多經歷一些事情，知道更多的知識。不是嗎？啊，對了！你去問問比你年紀大的人，也許他們會知道！");
            break;
        case 3:
            qm.sendPrevS("已經問過爸爸一次了……不過還是再去問問他吧。", 3);
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(22504).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
