/*
     名字：接受秘密團體的第三個秘密之前
     地图：黑色影子
     描述：黑色影子
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 3) {
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
            qm.sendSimple("好久不見，龍魔導士，這段時間過得還好嗎？由於你出色的完成了工作，我們的計畫也得以順利進行，那麼下一個任務……\r\n#L0##b在接收任務之前，我能問一個問題嗎？#l");
            break;
        case 1:
            qm.sendSimple("可以，有什麼問題就儘管問吧，如果有什麼疑問，我當然應該為你解答。\r\n#L0##b我身為團體的臨時成員，對團體卻一無所知。我想知道更多關於團體的事情。#l");
            break;
        case 2:
            qm.sendSimple("……啊，這樣啊，有這樣的疑問也是難免的……嗯，好吧，在給你第三個任務之前，我去直接和你見一面，跟你詳細地介紹一下我們團體。\r\n#L0##b太好了！應該到哪裡去找你呢？#l");
            break;
        case 3:
            qm.sendPrev("請到玩具城村莊來，哪裡是我們團體使用的據點之一，我們在哪裡見面吧。你只要到#b#m922030000##k來就行，我會等著你的。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(22581).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
