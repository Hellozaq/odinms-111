/*
     名字：黑色翅膀的新武器
     地图：陷阱！實驗室監獄
     描述：931000310
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23049)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23049).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你成功地破壞掉了黑色翅膀的新武器！哈哈……真不敢相信！連我都沒有做到的事情，你竟然做到了！你真是個了不起的傢夥！有你這樣的末日反抗軍，我為你感到自豪！");
            break;
        case 1:
            qm.sendPrevS("啊！不，現在不是說這些的時候……發現新武器被破壞之後，傑利麥勒很快就會帶著手下到這裡來。我們必須在這之前逃出去！我要馬上使用地下本部基地返回卷軸了！好了，一……二……三！", 3);
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23049).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(310010000), qm.getMap(310010000).getPortal(0));
            qm.dispose();
    }
}
