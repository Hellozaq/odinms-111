/*
     名字：公主的真相
     地图：結婚禮堂
     描述：106021600
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
            qm.sendNext("勇士大人，真是謝謝你，你是救出我們王國的英雄，真不知道該說什麼好。還有，讓我感到羞愧的是，無法讓你看到我的臉，希望你能原諒。");
            break;
        case 1:
            qm.sendNextPrev("雖然由我自己說出來有點不好意思，可是從小開始有很多男性被我的美貌迷倒，所以除了家人之外，我從來都不讓別人看我自己的臉，甚至是女人。我也不習慣在他們面前拋頭露面，不過如果在你面前一直不以真面部示人，好像太沒禮貌了……我需要鼓起勇氣，和你正面打個招呼。");
            break;
        case 2:
            qm.sendNextPrevS("啊~好的……#b(哇塞~到底是怎麼樣的美人啊？)");
            break;
        case 3:
            qm.showNpcSpecialEffect(1300002, "face");
            var tick = 0;
            schedule = Packages.server.Timer.EtcTimer.getInstance().register(function () {
                if (tick == 1) {
                    qm.sendNextS("#b(What the--)", 3);
                    schedule.cancel(true);
                }
                tick++;
            }, 8000);
            break;
        case 4:
            qm.sendNextS("這…這是…難道在菇菇的世界裡，這是被認為#b很美#k的東西嗎？", 3);
            break;
        case 5:
            qm.sendPrevS("好害羞啊，總之真是太感謝了。#b勇士大人#k。", 1);
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(2334).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
