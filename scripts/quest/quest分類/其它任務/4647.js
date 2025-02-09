/*
     名字：訓練師的秘方
     地图：寵物公園
     描述：100000202
 */

var status = -1;

function end(mode, type, selection) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(4647)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(4647).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            if (!qm.getPlayer().itemQuantity(5460000)) {
                qm.sendOk("寵物點心在一般商人哪裡是買不到的，只有在購物商城才能見到。");
                qm.dispose();
                return;
            }
            qm.sendNext("你帶來了寵物點心，看樣子你真的很愛惜寵物，所以我將傳授一個新的技能給你。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s20000024# #q20000024# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7000 exp");
            break;
        case 1:
            y = qm.getPlayer().getJob();
            Packages.server.quest.MapleQuest.getInstance(4647).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(y < 1000 ? 8 : y < 2000 ? 10000018 : y < 2200 ? 20000024 : y < 2300 ? 20011024 : y < 2400 ? 20020024 : y < 3200 ? 30010024 : 30000024), 1, 1, -1);
            qm.gainItem(5460000, -1);
            qm.gainExp(7000);
            qm.dispose();
    }
}
