/*
     名字：新的開始
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
            if (status > 4) {
                qm.sendOk("哎呀？你要拒絕，是覺得自己一人也可以修練的意思嗎？比起自己一個人，接受其他人的幫助應該可以得到更好的結果啊，現在也該學學跟其他人相處的方法了。");
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
            qm.sendNext("一副好像想起什麼的臉，果然巨大的矛認出你的樣子。那麼你就是使用過巨大的矛的英雄，狂狼勇士沒錯。這以外還沒有想起什麼呢？例如與巨大的矛相關的技能...");
            break;
        case 1:
            qm.sendNextPrevS("告訴我了幾個記得的技能。");
            break;
        case 2:
            qm.sendNextPrev("雖然不多但也有收穫了。那麼從現在起要用盡全力找回以前的能力了。雖然喪失記憶，但至少是曾經做過的事，一定可以很快地找回能力的。");
            break;
        case 3:
            qm.sendNextPrevS("要怎麼找回能力呢？");
            break;
        case 4:
            qm.sendNextPrev("這個嘛...只有一個辦法，修練！修練！修練！修練在修練的話，總有一天身體可以找回那個被遺忘的感覺！");
            break;
        case 5:
            qm.sendAcceptDecline("如果使用更熟悉的武器應該會更好，給你一把練習專用矛，帶著那個武器去瑞恩修練場入口見企鵝老師普歐，他會對你的修練提供幫助的。");
            break;
        case 6:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(21700).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(1442077, qm.getPlayer().itemQuantity(1442077) ? 0 : 1);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1"));
            qm.dispose();
    }
}
