/*
     名字：5位英雄
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 6) {
                qm.sendOk("有什麼好猶豫的呢？假如巨大的矛沒有反應，也沒什麼好失望的，快點去摸#p1201001#。");
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
            qm.sendNext("和黑魔法師決鬥的英雄...幾乎沒有任何相關的資訊保存下來。預言書上也只記錄有五名英雄，沒有任何和外貌有關的資料。你難道什麼都想不起來嗎？");
            break;
        case 1:
            qm.sendNextPrevS("#b什麼都想不起來...");
            break;
        case 2:
            qm.sendNextPrev("原來如此。黑魔法師的詛咒不會那麼容易就被解除。可是就算如此，英雄您和過去之間應該有什麼連結。到底有什麼呢？因為決鬥的關係，武器或衣服都不見了...啊！對了！#b武器#k！");
            break;
        case 3:
            qm.sendNextPrevS("#b........武器?");
            break;
        case 4:
            qm.sendNextPrev("之前在冰雪中挖掘英雄時曾經找到一些厲害的武器。當時推測應該是英雄使用過的東西，因此保存在村莊中央。您經過時沒看到嗎？#b#p1201001##k... \r\n#v4032372#\r\n長成這樣....");
            break;
        case 5:
            qm.sendNextPrevS("#b難怪我覺得很奇怪，有把巨大的矛就在村莊裡面...");
            break;
        case 6:
            qm.sendAcceptDecline("是，就是那個。根據紀錄英雄的武器會認主人。假如您是使用巨大的矛的英雄，抓住巨大的矛時應該會有什麼反應。快點去按#b#p1201001##k吧。");
            break;
        case 7:
            qm.sendPrev("假如有反應的話，您就使用巨大的矛的英雄#b狂狼勇士#k。");
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(21100).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
