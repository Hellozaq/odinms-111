/*
     名字：尋找最強的武器
     地图：大將翁的鐵舖
     描述：914021000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 4) {
                qm.sendOk("等你考慮好在來找我談談吧！");
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
            qm.sendNext("呼呼……年輕人來這麼偏僻的地方做什麼？");
            break;
        case 1:
            qm.sendNextPrevS("我想要最厲害的矛！");
            break;
        case 2:
            qm.sendNextPrev("最厲害的矛？那個可能在某個村莊內有賣…….");
            break;
        case 3:
            qm.sendNextPrevS("我知道您就是楓之谷裡最厲害的鐵匠！我想要您做的武器！");
            break;
        case 4:
            qm.sendYesNo("我這個老人家已經年紀一大把了，早就做不出一流的武器了。可是之前製作的東西當中有支還不錯矛……不過卻不能給你。那個傢夥非常鋒利，弄不好連主人都會被傷到。這樣你還想要嗎？");
            break;
        case 5:
            qm.sendPrev("呼呼……你這樣說也沒辦法，老人家要做一個簡單的測試。你去旁邊的鐵舖外部，打敗那些傷痕熊，取回資格的象徵30個。那我就把巨大的矛交給你。");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(21202).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

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
            qm.sendNext("喔～資格的象徵都取回來了嗎？你……比我想像的還要厲害一些嘛。不過，我最欣賞的是你毫不畏懼可能會傷到自己的危險武器，爽快的說要帶走的態度……很好，巨大的矛就送給你吧！");
            break;
        case 1:
            qm.sendNextPrevS("不久後，大長翁拿出用布包裹的巨大的矛。");
            break;
        case 2:
            qm.sendPrev("這就是為你製作的武器，名叫#b瑪哈#k……以後就拜託了。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21202).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(914090201), qm.getMap(914090201).getPortal(0));
            qm.removeAll(4032311);
            qm.dispose();
    }
}
