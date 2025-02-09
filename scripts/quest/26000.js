/*
     名字：黛依雅的G-藥水
     地图：公會
     描述：公會
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("你不想現在領取嗎？需要的話，請在週一之內領走。");
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
            //if (qm.getGuild().getLevel() < 1 || !qm.getGuild().hasSkill(91000006)) {
            //qm.dispose();
            //return;
            //}
            qm.sendAcceptDecline("公會定期支援物品到了。來，拿著。希望你不要有什麼不滿。努力活動，等家族等級提高之後，就可以獲得更多的東西了。");
            break;
        case 1:
            qm.sendPrev("這一周辛苦你了。下週一的時候，還會有新的支援物品，到時你再過來看看。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2002037# #t2002037# 7");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(26000).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItemPeriod(2002037, qm.getGuild().getLevel() * 20, 7);
            qm.dispose();
    }
}
