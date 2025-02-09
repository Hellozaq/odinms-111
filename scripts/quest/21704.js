/*
     名字：小小一步
     地图：瑞恩村
     描述：140000000
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
            qm.sendNext("修煉進行的不錯吧？企鵝老師普歐個性很強，我還擔心他要是癡呆了就不好辦了……他對英雄的技能確實很有研究，對你應該能幫上不少忙。");
            break;
        case 1:
            qm.sendNextPrevS("告訴莉琳自己回想起來矛之鬥氣這個技能。");
            break;
        case 2:
            qm.sendPrev("是嗎！看來除了普歐的訓練方式之外，你自己仍然記得從前的那些技能也很關鍵啊……看來只是在冰窖裡封凍的太久，需要時間恢復而已。繼續加油修煉吧，爭取早日恢復所有的技能！");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21704).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
