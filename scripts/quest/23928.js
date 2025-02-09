/*
     名字：姐姐的生日派對1
     地图：埃德爾斯坦
     描述：310000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 2) {
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
            qm.sendNext("呃……手好疼。看來我是沒辦法了。沒有誰能幫幫我嗎？嗯？什麼事情？烏利卡有個姐姐。她長得非常非常漂亮，而且又很聰明，因此一直很忙。不過她是個善良的姐姐。");
            break;
        case 1:
            qm.sendNextPrev("不久之後就是姐姐的生日了。我總不能什麼都不做吧？所以我想做個蛋糕，為姐姐舉辦一個隆重的生日晚會。但是……沒想到讓奶油發泡這麼難。我的手好疼……喂，有空的話，你能幫幫我嗎？");
            break;
        case 2:
            qm.sendAcceptDecline("只要用普通攻擊不斷地攻擊碗的兩邊，就可以製作出泡沫。把完成的泡沫交給我就行了。怎麼樣？應該沒問題吧？如果你願意幫我，我就把你送到做奶油的廚房裡去。");
            break;
        case 3:
            if (qm.getMap(931010020).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23928).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(931010020).resetFully();
                qm.getPlayer().changeMap(qm.getMap(931010020), qm.getMap(931010020).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(180, qm.getMap(310000000));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "烏利卡的基地目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
