/*
     名字：請救出小孩1
     地图：避難準備中
     描述：914000100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("不行啊！拋棄那個孩子，只剩下我們苟且偷生...那人生還有什麼意義！！");
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
            qm.sendNext("真是的！好像還有個孩子留在森林內！我們不可能丟下孩子逃走。#b#h0##k...請你去救救那個孩子吧！");
            break;
        case 1:
            qm.sendNextPrev("我知道對受傷的你說這些話真的很厚顏無恥，可是...只能拜託你了！孩子應該在#b森林深處#k。");
            break;
        case 2:
            qm.sendAcceptDecline("在黑魔法師追來這裡之前，方舟要趕緊出發！所以請你儘快將孩子安全帶到這裡！我不希望有人再犧牲於黑魔法師的魔掌之下！");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21000).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1"));
            qm.dispose();
    }
}
