/*
     名字：大亂鬥參加獎勵
     地图：戰鬥廣場
     描述：960000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
                qm.sendOk("不會那麼難啦…。");
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
            qm.sendNext("你好~我是戰鬥廣場嚮導羅茲弟。當您完成我給予的挑戰任務時，會給予您禮物。");
            break;
        case 1:
            qm.sendAcceptDecline("這次的任務非常簡單喔！今天一天內，只要參加大亂鬥的不管什麼模式5次就給予您禮物。您當然會挑戰吧？");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(11051).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(11054).forceStart(qm.getPlayer(), qm.getNpc(), 0);
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
            qm.sendNext("果然，就知道這次的任務是可很輕易達成的。如何？沒那麼難吧？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4310015# #t4310015# 1");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(11051).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4310015, 1);
            qm.dispose();
    }
}
