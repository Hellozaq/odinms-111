/*
     名字：訓練師的秘方
     地图：寵物公園
     描述：100000202
 */

var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

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
            job = qm.getPlayer().getJob(); //判断职业
            Packages.server.quest.MapleQuest.getInstance(4647).forceComplete(qm.getPlayer(), qm.getNpc());
            if (job < 1000) {
                qm.teachSkill(8, 1); //冒险家
            } else if (job < 2000) {
                qm.teachSkill(10000018, 1); //骑士团
            } else if (job < 2200) {
                qm.teachSkill(20000024, 1); //战神
            } else if (job < 2300) {
                qm.teachSkill(20011024, 1); //龙神
            } else if (job < 2400) {
                qm.teachSkill(20021024, 1); //双弩精灵
            } else if (job < 3200) {
                qm.teachSkill(30011024, 1); //恶魔猎手
            } else {
                qm.teachSkill(30001024, 1); //反抗者
            }
            qm.gainItem(5460000, -1);
            qm.gainExp(7000);
            qm.dispose();
    }
}
