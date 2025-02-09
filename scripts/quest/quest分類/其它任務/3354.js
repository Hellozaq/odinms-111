/*
     名字：特力的藥
     地图：特力的研究室
     描述：926120200
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("實驗還沒有完全結束，有許多實驗工具，所以請避開這裡。");
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
            qm.sendNext("呼嗚...沒有更進一步的研究進展，實際上實驗就如失敗沒有兩樣。知道了不管怎麼研究也無法從擁有原本記憶的人類肉體變成#b機械#k的事实...。");
            break;
        case 1:
            qm.sendNextPrev("我做这些...是為了女兒琪妮的藥，琪妮先天性身體脆弱。原本是這麼想的...事實上這因為是妖精和人類的混血的结果，因此為了這孩子開發了藥。");
            break;
        case 2:
            qm.sendAcceptDecline("呼呼....雖然把人類變成機械延長壽命的研究失敗了...無法像妖精一樣永遠存活，但是想想或許這也是一種愛，研究就要在這結尾，爆發物很危險，所以把你從研究室趕走。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3354).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(261020401), qm.getMap(261020401).getPortal(0));
            qm.dispose();
    }
}
