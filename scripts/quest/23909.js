/*
     名字：憤怒的對象在哪裡
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
            qm.sendNext("欺騙背叛了主人和我的黑色翅膀……他們一定在埃德爾斯坦！只要前往在礦山那裡的黑色翅膀根據地，應該能找到伊培賀。");
            break;
        case 1:
            qm.sendNextPrevS("也許吧……但是不能因為他們是黑色翅膀就隨便發動攻擊。雖然他們都是壞人，但我只想向伊培賀一個人報仇。");
            break;
        case 2:
            qm.sendAcceptDecline("那我們先隱藏我們的身份，在埃德爾斯坦周邊活動，遇到伊培賀的話，再發動攻擊。到時我絕對不會放過他。我一定要報仇。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(23909).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
