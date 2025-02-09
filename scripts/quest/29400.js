/*
     名字：精明的獵人
     地图：維多利亞港
     描述：104000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("等我準備好了再來。");
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
            qm.sendAcceptDecline("#v1142004# #e#b#t1142004##k\r\n\r\n-限制時間30天\r\n-獵殺高於自身等級的100,000隻怪獸#n\r\n\r\n你想不想試試看有沒有資格可以當這個勳章的主人呢？");
            break;
        case 1:
            qm.sendPrev("我會給你30天的時間，如果能在規定時間內，獵殺高於自身等級的100,000隻怪獸，就來找我。請記住唯有在限制時間內來找我確認才算得到認證。還有若是還沒完成或放棄這個挑戰，不可以挑戰其他稱號。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(29400).forceStart(qm.getPlayer(), qm.getNpc(), 0);
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29400)).getCustomData() < 100000) {
                qm.sendNext("讓我看看，目前你獵殺的怪獸数量" + qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29400)).getCustomData() + "，距離規定的目標還差#r" + (100000 - qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29400)).getCustomData()) + "#k，看來你想要成为精明的獵人，还需努力哦。");
                qm.dispose();
                return;
            }
            qm.sendNext("你成功的在30天內，獵殺高於自身等級的100,000隻怪獸！符合拥有#e#b精明的獵人#k#n的稱號，祝賀你！");
            break;
        case 1:
            qm.sendPrev("我達利額代替名譽之神向世界宣佈，你是這個名譽的稱號的主人。倘若你想挑戰新的稱號，歡迎隨時回來找我。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142004# #t1142004# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(29400).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142004, 1, 30);
            qm.dispose();
    }
}
