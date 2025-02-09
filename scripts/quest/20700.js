/*
     名字：可以就這樣下去嗎？
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
                qm.sendOk("你什麼時候才能意識到自己有多軟弱。");
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
            qm.sendNext("你終於在修煉中成為了一名騎士，我想馬上給你一個任務，但你看起來離自己能完成任務的距離還有很遠，暫時還不能派遣你去#b維多利亞#k。");
            break;
        case 1:
            qm.sendNextPrev("一個在修煉中，不能照顧好自己的騎士，很可能會損害皇家騎士團的名聲。作為這個島上的首席策士，我不能讓這種事發生，我要你一直修煉到#b合適#k的時候。");
            break;
        case 2:
            qm.sendAcceptDecline("奇酷修煉教官，將幫助你進行一些強化修煉。一旦你達到13級，我會給你分配一兩個任務，所以在那之前，繼續修煉。");
            break;
        case 3:
            qm.sendPrev("忘記和你說了，如果你和神獸談話，她會給你祝福，一定會對你的旅程有所幫助。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(20700).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
