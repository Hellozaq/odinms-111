/*
     名字：教你打獵方法
     地图：開始之森林3
     描述：130030002
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("這其實並不難，你會得到特殊裝備作為獎勵！好吧，請認真想一想，如果你改變主意就告訴我。");
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
            qm.sendNext("關於打獵怪物，是有許多方法的哦，但是最基本的方法就是#r基礎攻擊#k。你只要一把武器，簡單的操作就可以消滅敵人。");
            break;
        case 1:
            qm.sendNextPrev("按「Ctrl」鍵即可普通攻擊，如果你不常用這個按鍵，可以在右下角的#b鍵盤設定#k處更換其它的按鍵。 ");
            break;
        case 2:
            qm.sendAcceptDecline("現在，我們要進行實際測試。在這方面，你可以找到最薄弱#r#o100120##k測試一下，在耶雷弗，目前是你的最佳選擇。嘗試狩獵#b1只#k#o100120#，當你回來時，我會給你獎勵。");
            break;
        case 3:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(4));
            Packages.server.quest.MapleQuest.getInstance(20011).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("吖！看來你成功地獵到了提諾。很簡單，對吧？那麼基礎攻擊狩獵的課程到此結束。");
            break;
        case 1:
            qm.sendPrev("這身裝備是貴族專屬的，是給你的獎勵，穿上它吧！然後繼續往前走，找我的兄弟#b#p1102006##k，他會告訴你下一步該怎麼做。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1002869# #t1002869# 1 \r\n#v1052177# #t1052177# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
            break;
        case 2:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(6));
            Packages.server.quest.MapleQuest.getInstance(20011).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1002869, 1);
            qm.gainItem(1052177, 1);
            qm.gainExp(35);
            qm.dispose();
    }
}
