/*
     名字：人氣王！
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
            qm.sendAcceptDecline("#v1142003# #e#b#t1142003##k\r\n\r\n-限制時間30天\r\n-人氣提升至1000#n\r\n\r\n你想不想試試看有沒有資格可以當這個勳章的主人呢？");
            break;
        case 1:
            qm.sendPrev("我會給你30天的時間，如果能在規定時間內，人氣提升至1000，就來找我。請記住唯有在限制時間內來找我確認才算得到認證。還有若是還沒完成或放棄這個挑戰，不可以挑戰其他稱號。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(29002).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            if (qm.getPlayer().getFame() < 1000) {
                qm.sendNext("讓我看看，目前你的人氣" + qm.getPlayer().getFame() + "，距離規定的目標還差" + (1000 - qm.getPlayer().getFame()) + "，看來你還是需要繼續累計人氣呦。");
                qm.dispose();
                return;
            }
            qm.sendNext("你成功的在30天內，將人氣提升至1000！你的人緣非常不錯，符合擁有#e#b人氣王#k#n的稱號，祝賀你！");
            break;
        case 1:
            qm.sendPrev("我達利額代替名譽之神向世界宣佈，你是這個名譽的稱號的主人。倘若你想挑戰新的稱號，歡迎隨時回來找我。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142003# #t1142003# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(29002).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142003, 1);
            qm.dispose();
    }
}
