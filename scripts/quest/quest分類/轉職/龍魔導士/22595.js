/*
     名字：第三個任務的結果
     地图：玩具城
     描述：220000000
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
            qm.sendNext("你好，我是玩具城的衛兵馬賽爾。有什麼可以幫你的？嗯？#o9300390#嗎？");
            break;
        case 1:
            qm.sendNextPrev("噓！你是怎麼知道門鎖的事情的？誰也不知道它是守衛秘密倉庫的看守……呵呵，好吧，我就把#o9300390#的情况告訴你吧。");
            break;
        case 2:
            qm.sendNextPrev("不久前，門鎖遭到襲擊，受了重傷。囙此就沒人守衛秘密倉庫了。小偷趁這個機會溜了進來。雖然不知道是什麼寶物……但事情很嚴重。");
            break;
        case 3:
            qm.sendPrev("…呵，為，為什麼擺出這麼可怕的表情？謝謝你對小偷的事情表示憤慨，但這件事情你幫我保密！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 28135 exp");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(22595).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(28135);
            qm.dispose();
    }
}
