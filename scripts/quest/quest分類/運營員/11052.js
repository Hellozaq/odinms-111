/*
     名字：生存達人
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
                qm.sendOk("不是那麼難的任務啦…是您的話就有可能嘛？");
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
            qm.sendAcceptDecline("這次的挑戰任務是~今天一天內在生存模式達成1000分！如何？不會那麼難吧？");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(11052).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(11055).forceStart(qm.getPlayer(), qm.getNpc(), 0);
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
            qm.sendNext("這次的挑戰任務不會很難吧？來，依照約定給予您禮物。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4310015# #t4310015# 1");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(11052).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4310015, 1);
            qm.dispose();
    }
}
