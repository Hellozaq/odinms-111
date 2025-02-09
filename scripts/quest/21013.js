/*
     名字：為英雄準備的禮物
     地图：寒冷的森林４
     描述：140090400
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.dispose();
                return;
            }
            if (status < 2) {
                qm.sendOk("對英雄很有幫助的禮物，請不要拒絕。");
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
            qm.sendSimple("啊，英雄...我好想你喔！\r\n#L0##b(害羞的樣子)#l");
            break;
        case 1:
            qm.sendAcceptDecline("我從以前就決定遇見英雄要送您一個禮物...我知道您忙著回村莊，可是...可以收下我誠心的禮物嗎？");
            break;
        case 2:
            qm.sendOk("禮物的材料就放在這附近的箱子裡面。雖然有點麻煩，可是請您將箱子打破後，裡面的材料#b#v4032309##t4032309##k和#b#v4032310##t4032310##k帶回來，我就會立刻幫您組裝。");
            break;
        case 3:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(18));
            Packages.server.quest.MapleQuest.getInstance(21013).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("材料都帶回來了嗎？那麼請您等一下，只要這樣組裝一下.....");
            break;
        case 1:
            qm.sendNextPrev("好了，椅子做好了！嘿嘿！就算是英雄也有疲勞的時候，因此我從很早以前就想送英雄一把椅子當作禮物。");
            break;
        case 2:
            qm.sendPrev("就算是英雄也不可能永遠都很強大。英雄應該也有疲勞吃力的時候，有時也會感到脆弱。可以克服那些的人才配當英雄不是嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v3010062# #t3010062# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
            break;
        case 3:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(19));
            Packages.server.quest.MapleQuest.getInstance(21013).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4032309, -1);
            qm.gainItem(4032310, -1);
            qm.gainItem(3010062, 1);
            qm.gainExp(95);
            qm.dispose();
    }
}
