/*
     名字：大亂鬥勝利的主角
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
                qm.sendOk("沒自信嗎？");
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
            qm.sendAcceptDecline("嗯？你問我是什麼任務？那就是~今天一天內在小隊對抗獲勝3次。如何？是你的話好像能辦得到…");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(11053).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(11056).forceStart(qm.getPlayer(), qm.getNpc(), 0);
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
            qm.sendNext("唉呀！你完成任務了耶！在小隊對抗獲勝3次可不是那麼簡單的呢，你真太了不起了！那麼給予您準備的禮物道具。這在大亂鬥中會一番用途的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4310015# #t4310015# 1");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(11053).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4310015, 1);
            qm.dispose();
    }
}
