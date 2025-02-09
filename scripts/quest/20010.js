/*
     名字：歡迎您來到耶雷弗！
     地图：開始之森林2
     描述：130030001
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
                qm.sendOk("我一直在這裡，如果你改變注意，可以再次來找我。");
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
            qm.sendNext("歡迎來到耶雷弗！很高興見到你！我在這裡等你好久了，你想成為楓之谷世界的騎士，對嗎？我的名字是#r#p1102004##k。");
            break;
        case 1:
            qm.sendYesNo("如果想成為楓之谷騎士團中的一員，你必須先見見#r#p1101000##k女皇，她在這個島的中心。但是在此之前，我和我的兄弟們想和你分享一些東西，這些東西在楓之谷裏被稱為#b基本知識#k，你想瞭解嗎？");
            break;
        case 2:
            qm.sendNextPrev("噢，我提醒你一下，這個是一項任務。你可以注意到，NPC頭頂上偶爾會有燈泡，那稱之為任務「QUEST」資訊，完成任務你將可以得到很多豐富的#r獎勵#k哦。");
            break;
        case 3:
            qm.sendPrev("好的，我的說明暫時到這裡，請你沿著這條路繼續往下走，你就會看到#b#p1102005##k，他將會指導你打獵的常識。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(20010).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
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
            qm.sendNext("你是我哥哥刚刚派來的貴族嗎？很高興認識你！我是#b#p1102005##k。初次見面，這些是我給你的禮物，你可以按「i」鍵檢查你的消耗欄，紅色藥劑幫助你恢復#rHP#k，藍色藥劑幫助你恢復#bMP#k。事先學會如何使用它們是一個好主意，這樣當你遇到危險時，你就可以隨時準備好。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2000020# #t2000020# 5 \r\n#v2000021# #t2000021# 5 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15 exp");
            break;
        case 1:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(3));
            Packages.server.quest.MapleQuest.getInstance(20010).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(2000020, 5);
            qm.gainItem(2000021, 5);
            qm.gainExp(15);
            qm.dispose();
    }
}
