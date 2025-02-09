/*
     名字：說服莫哈默德
     地图：納希民宅
     描述：260000200
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 5) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3953)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3953).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendSimple("如果你想說仙人长老是怪物，我根本不想聽，你快走吧！……嗯？這不是鋰嗎？從顏色看，應該是最高級的鋰……狀態也很好……嗯？你要把它給我？呵呵……鋰的話，我就不会了，對了……這是為什麼呢？\r\n#L0##b你聽說前往沙漠的商團遭到了怪物的襲擊嗎？#l");
            break;
        case 1:
            qm.sendSimple("商團？……護衛的人手好像太少了，炎热之路雖然沒有太危險的怪物，但也不能那樣粗心大意……必須時刻保持警惕才行。\r\n#L0##b這都是因為王妃對村子周圍的治安疏於管理。#l");
            break;
        case 2:
            qm.sendSimple("沒錯！都是因為雅莉達！自從那個女人來了之後……原本很聰明的阿都拉八世全變了，纳希绿洲也逐漸變得乾旱！綠洲變成了荒漠！這都是因為那個女人！\r\n#L0##b王妃施行暴政，不知道纳希的守護神怎麼做，必須儘快組織軍隊，使國家擺脫王妃的壓迫！#l");
            break;
        case 3:
            qm.sendSimple("……這個嘛，要是仙人长老能稍微出一點力就好了，守護神也不聞不問的……\r\n#L0##b所以……仙人长老已經成了怪物，不是嗎？仙人长老只是個怪物，所以這是沒辦法的事#l");
            break;
        case 4:
            qm.sendSimple("……你說什麼？仙人长老變成了怪物……他可是纳希的守護神啊……不過也是……纳希绿洲已經和過去不同了……\r\n#L0##b所以說嘛，仙人长老也失去了原來的靈性，變成了怪物……#l");
            break;
        case 5:
            qm.sendPrev("對……也許你的話是對的，纳希绿洲變成了這樣……這也許是因為仙人长老變了的緣故，也許仙人长老真的已經變成了怪物……就像年輕人說的那樣，到了除掉仙人长老的時候了……\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15000 exp");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(3953).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4011008, -1);
            qm.gainExp(15000);
            qm.dispose();
    }
}
