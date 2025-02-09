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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23035)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23035).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你成功地破壞了能量傳送裝置！你沒有辜負我對你的期待……真的非常感謝。這樣的話，我們村的能量不足現象就會有一定程度的緩解。你這次真的為我們村立了大功！");
            break;
        case 1:
            qm.sendAcceptDecline("我親眼確認了你的能力，現在輪到我向你展現我的能力了。我會將新的技能傳授給你。技能的熟練度不高的話，將會無法使用。我本來想過一段時間再告訴你……不過現在的你已經擁有了充分的能力。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23035).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3511);
            qm.sendNext("現在你已經不再是從前的你了。更多樣、更複雜、更強大的技能將會讓你變得完整。會不會太難？請別擔心。你應該完全有能力使用，因為你完成了那麼難的任務。");
            break;
        case 3:
            qm.sendOk("讓我們下次課程再見吧。在那之前，希望你能以末日反抗軍的身份，繼續努力。");
            break;
        case 4:
            qm.dispose();
    }
}
