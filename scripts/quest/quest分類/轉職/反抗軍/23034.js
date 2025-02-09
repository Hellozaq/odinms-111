/*
     名字：破壞能源傳送裝置
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23034)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23034).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你把能量傳送裝置破壞掉啦！呵呵，果然不出我所料！我的眼光從來都沒有錯。我知道你一定可以做到。這樣一來，我們村的能量不足現象暫時就可以緩解了。你真的為我們村立下了大功！");
            break;
        case 1:
            qm.sendAcceptDecline("你的能力達到了這個程度，我就可以放心地讓你進入下一階段的課程了。雖然其他人勸我，說還很危險……但是我想你一定不會被技能難倒，一定可以成為更強的狂豹獵人！");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23034).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3311);
            qm.sendNext("現在你已經不是以前的你了。更強、更快、更華麗的技能世界將會展現在你面前。使用起來也很不容易，但是……你有什麼好害怕的呢？你連那麼危險的任務都完成了。");
            break;
        case 3:
            qm.sendOk("讓我們下次課程再見吧。在那之前，希望你能以末日反抗軍的身份，繼續努力。");
            break;
        case 4:
            qm.dispose();
    }
}
