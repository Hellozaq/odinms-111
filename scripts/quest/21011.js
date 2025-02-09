/*
     名字：消失的武器
     地图：寒冷的森林２
     描述：140090200
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
                qm.dispose();
                return;
            }
            if (status == 3) {
                qm.sendOk("哦，那樣啊。英雄果然很忙啊....哭哭。要是改變主意了，隨時可以來找我。");
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21011)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21011).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("剛才我好像聽到說「英雄回來了...」，是我聽錯了嗎？什麼？沒聽錯嗎？真的這位...這位是英雄嗎？");
            break;
        case 1:
            qm.sendNextPrev("...真是高興啊...竟然能這樣見到英雄，真是榮幸啊！求您握個手吧，順便再抱一下我就更好了，但首先還是先簽個名吧....");
            break;
        case 2:
            qm.sendSimple("可是...英雄怎麼沒有帶武器呢？？\r\n#L0##b據我所知英雄有自己武器...啊...應該是和黑魔法師決鬥時弄掉了。#l");
            break;
        case 3:
            qm.sendAcceptDecline("湊合著用可能會太寒酸，不過請你先收下這把劍吧！這是我送給英雄的禮物。英雄空著手總是有點奇怪。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1302000# #t1302000# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(21011).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1302000, qm.getPlayer().itemQuantity(1302000) ? 0 : 1);
            qm.gainExp(35);
            qm.sendOkS("#b連劍都好陌生，我之前真的有用過劍嗎？劍該怎麼配戴呢？", 3);
            break;
        case 5:
            if (!qm.getPlayer().hasSummon())
                qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(16));
            qm.dispose();
    }
}
