/*
     名字：從遠海抓回的奇怪生物
     地图：上層走廊
     描述：120000100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("這可是為了我們海盜啊，你成為海盜的理由是什麼？");
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
            qm.sendNext("嗯…實在是搞不懂啊。");
            break;
        case 1:
            qm.sendNextPrev("不久前，出海之後捉來了奇怪的生物，卻不知道到底是什麼。那傢伙渾身散發著奇妙的氣息，應該不是平凡之物。為了進行調查進行攻擊，一下就會消失掉，實在沒什麼方法。可能我的力量不適合…");
            break;
        case 2:
            qm.sendAcceptDecline("對！你來試試怎麼樣？如果是你的話也許還真能行！如何？想不想試一下？");
            break;
        case 3:
            qm.forceStartQuest();
            qm.dispose();
    }
}
