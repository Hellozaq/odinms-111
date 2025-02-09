/*
     名字：詹姆士的下落（３）
     地图：中央城塔
     描述：106021201
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
            qm.sendNext("勇士大人！謝謝你來城堡裡救我，如果沒有你，我真的不知道怎麼辦。");
            break;
        case 1:
            qm.sendNextPrev("我打算穿著頭盔企鵝王的頭盔從這裡逃跑，希望以後有機會還能再見。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1900 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(2327).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.showNpcSpecialEffect(1300008, "out");
            qm.gainExp(1900);
            var tick = 0;
            schedule = Packages.server.Timer.EtcTimer.getInstance().register(function () {
                if (tick == 1) {
                    qm.showNpcSpecialEffect(1300008, "hat");
                    schedule.cancel(true);
                    qm.dispose();
                    return;
                }
                tick++;
            }, 4100);
    }
}
