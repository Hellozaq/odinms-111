/*
     名字：勸解發飆的矛
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 2) {
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
            qm.sendNext("…你問我為什麼這副德行嗎？…我不太想說…不，我無法對主人你隱瞞…");
            break;
        case 1:
            qm.sendNextPrev("…你被困在冰雪中數百年的時間，我也被困在冰雪中。漫長等待的歲月，使黑暗的種子種在了我的心裡。");
            break;
        case 2:
            qm.sendNextPrev("可是當你醒來後，黑暗完全消失了，主人回來了，就沒什麼好遺憾的，應該會忘得一乾二淨……但是那只是我的錯覺。");
            break;
        case 3:
            qm.sendAcceptDecline("拜託你，狂狼勇士…阻止我，可以阻止我暴走的只有主人你了。現在我無法抑制我自己了，請你擊敗暴走的我吧！");
            break;
        case 4:
            if (qm.getMap(914020000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21401).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(914020000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(914020000), qm.getMap(914020000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(1200, qm.getMap(140000000));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "與瑪哈的對決目前擁擠，請稍後再試"));
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            qm.sendNext("謝謝你，主人！多虧了你，才阻止了我的暴走。真是萬幸……！以主人的實力，這點小事當然不在話下了！");
            break;
        case 1:
            qm.sendAcceptDecline("現在來看，你的等級已經很高了。既然可以打倒暴走狀態下的我……那麼喚醒你過去全部的力量也應該是可以充分承受了。");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            qm.sendOk("你沉睡中的技能全部都喚醒了…已經遺忘了很久，需要再次修煉，但是只要練習就會有所幫助。");
            Packages.server.quest.MapleQuest.getInstance(21401).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(qm.getPlayer().getJob() + 1);
            qm.gainItem(1142132, 1);
            qm.dispose();
    }
}
