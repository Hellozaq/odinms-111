/*
     名字：英雄的歸來
     地图：寒冷的森林１
     描述：140090100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 0) {
                qm.dispose();
                return;
            }
            if (status == 3) {
                qm.sendOk("哎呀，不用客氣啦！送英雄一瓶藥水也不是什麼了不起的事。倘若您改變心意在告訴我吧。");
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
            qm.sendSimple("咦？莉琳大人到這裡有什麼事情...啊，這位是不是莉琳認識的人呢？\r\n#L0##b什麼！你說這位是英雄嗎？#l");
            break;
        case 1:
            qm.sendNextPrev("#v4001170#");
            break;
        case 2:
            qm.sendNextPrev("這位正是莉琳家族數百年等待的英雄！喔喔！難怪看起來不是什麼平凡的人物...");
            break;
        case 3:
            qm.sendAcceptDecline("但是，因為黑魔法師的詛咒而在巨冰裡沉睡著，所以，好像英雄的體力都消耗掉了的樣子。給你一個#b#v2000022##t2000022##k，趕緊喝喝看。");
            break;
        case 4:
            qm.getPlayer().addHP(qm.getPlayerStat("HP") > 40 ? -25 : 0);
            qm.gainItem(2000022, qm.getPlayer().itemQuantity(2000022) ? 0 : 1);
            qm.sendNextPrev("您先大口喝下，我再繼續說下去~");
            break;
        case 5:
            qm.sendPrevS("#b藥水該怎麼喝呢？...想不起來了...", 3);
            break;
        case 6:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(14));
            Packages.server.quest.MapleQuest.getInstance(21010).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("長久以來尋找英雄的痕跡，在冰雪中挖掘，果然真正的英雄出現了！預言果真是真的！莉琳大人做了正確的選擇，英雄回來了，現在沒有必要再畏懼黑魔法師了！");
            break;
        case 1:
            qm.sendNextPrev("啊！真是的，我耽誤英雄太久了。先收拾起快樂的心情...其他企鵝應該也有同樣的想法。我知道您很忙，不過在前往村莊的路上也請您和其他企鵝們談一談。可以和英雄談話，大家應該會很興奮！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2000022# #t2000022# 5 \r\n#v2000023# #t2000023# 5 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(21010).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(2000022, 5);
            qm.gainItem(2000023, 5);
            qm.gainExp(16);
            qm.sendNext("英雄升級了嗎？不曉得您有沒有獲得技能點數。在楓之谷內职业轉職之後每上升1級就會獲得3點的技能點數。按下技能選單#b「K」#k鍵就能確認。");
            break;
        case 3:
            qm.sendOkS("#b這麼親切的說明，可是我什麼都想不起來。我真的是英雄嗎？那麼先確認技能看看...可是我該怎麼確認呢？", 3);
            break;
        case 4:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(15));
            qm.dispose();
    }
}
