/*
     名字：史卡圖勒的真相
     地图：冰原雪域
     描述：211000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 5) {
                qm.sendOk("嗯嗯…又不是什麼難事…");
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
            qm.sendNext("謝謝你上次接受我的請求，這次也希望你能繼續幫我。");
            break;
        case 1:
            qm.sendNextPrevS("#b你的身體那麼不好嗎？");
            break;
        case 2:
            qm.sendNextPrev("好吧，我就有話直說了，事實上，身為獵人，這麼說讓我覺得很羞恥……");
            break;
        case 3:
            qm.sendNextPrev("幾天前。我像平常一樣，在冰雪峽谷打獵野狼。但是突然刮起一陣風，#b#o6090001##k出現在了我的面前。");
            break;
        case 4:
            qm.sendNextPrevS("#b雪山魔女？那是什麼啊？");
            break;
        case 5:
            qm.sendNextPrev("雪山魔女是冰峰雪域傳說中的怪物，據說她的身體是由冰雪構成的。我還以為只是傳說而已……沒想到真的會在這裡見到。剛開始見到的時候，我憑著獵人的勇氣把她擊敗了。但是在後來去打獵的時候，她又完好無損地出現在了我的面前。我當時非常害怕，所以就藉口身體不好，不願意出去打獵了。");
            break;
        case 6:
            qm.sendAcceptDecline("但是我不能一直這樣下去，我不能一直拜託別人幫忙……我想亞凱斯特也許有什麼解決辦法。你…能幫我去跟#b#p2020005##k說說嗎？我自己不太方便過去……周圍的人都看著呢……我想這個要求應該不難吧。");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(3185).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
