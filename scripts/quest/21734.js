/*
     名字：傀儡師的痕跡
     地图：特魯的情報商店
     描述：104000004
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("嗯？喂喂，怎麼這樣？大陸最高情報商人得到的最新消息！可以相信的。");
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
            qm.sendNext("忙嗎，英雄大人？這段期間，我用所有的方法打聽了維多利亞島當中的消息，找到了有趣的情報。就是關於#o9300346#的…");
            break;
        case 1:
            qm.sendNextPrev("知道嗎？自從英雄教訓傀儡師後，岩地荒野的入口不再運行了吧？#o9300346#，好像搬到別處了。");
            break;
        case 2:
            qm.sendAcceptDecline("有個情報說....傀儡師去了#m101000000#的#b邪惡氣息的森林1#k裡的#b傀儡師的避難所#k。應該是正確的消息。快去除掉#r#o9300346##k吧。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21734).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            qm.sendSimple("看來打倒了#o9300346#…怎麼是不高興的表情啊？發生什麼事了？\r\n#L0##b告訴了根本就沒有關於#t4032323#的情報。#l");
            break;
        case 1:
            qm.sendNextPrev("啊哈！是那個啊，哈哈哈…是那個的話不用擔心。");
            break;
        case 2:
            qm.sendPrev("看，我找到了一個應該是你之前使用過的技能，連環吸血，這個是可以將部分傷害變成HP的增益技能，很不錯吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21100005# #q21100005# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7500 exp");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21734).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(21100005), qm.getPlayer().getSkillLevel(21100005), 20, -1);
            qm.gainExp(7500);
            qm.dispose();
    }
}
