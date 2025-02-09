/*
     名字：準備逃脫
     地图：發電廠大廳
     描述：310050000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 4) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23951)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23951).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendSimple("啊？什麼事？\r\n#L0##b裡有機器人…！#l");
            break;
        case 1:
            qm.sendSimple("機器人只有一兩個嗎？說明白點！\r\n#L0##b裡有警備機器人…！#l");
            break;
        case 2:
            qm.sendSimple("警備機器人什麼？再說一次！\r\n#L0##b裡有警備機器人…！#l");
            break;
        case 3:
            qm.sendSimple("越來越變成不知原型的詞！你是不是以為我是兔子，就看扁我？雖然是兔子，但我的職位比你高！用敬語好好說！\r\n#L0##b在裡發現了摔壞的#o6150000#！是入侵者！#l");
            break;
        case 4:
            qm.sendPrev("什麼？為什麼現在才說？快去看看吧！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 99395 exp");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(23951).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(310050200), qm.getMap(310050200).getPortal(1));
            qm.gainItem(4000608, -30);
            qm.gainExp(99395);
            qm.dispose();
    }
}
