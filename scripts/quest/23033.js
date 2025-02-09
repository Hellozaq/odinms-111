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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23033)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23033).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你把能量傳送裝置破壞掉啦！幹得好！這樣的話，我們村的能量不足現象就能緩解一些了！心裡感覺終於暢快了！了不起！你為我們村立了大功！");
            break;
        case 1:
            qm.sendAcceptDecline("看到你有了這麼強的能力，就沒有必要再猶豫了。本來我覺得太危險，想過一段時間再傳授給你……我要把更強的煉獄巫師技能傳授給你！我想你一定可以掌握！");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23033).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3211);
            qm.sendNext("現在你已經不是以前的你了。近似瘋狂的、更危險的技能世界將會展現在你面前。控制也會變得更難，但是……呵呵，你能完成那麼危險的任務，相信你一定可以掌握。");
            break;
        case 3:
            qm.sendOk("讓我們下次課程再見吧。在那之前，希望你能以末日反抗軍的身份，繼續努力。");
            break;
        case 4:
            qm.dispose();
    }
}
