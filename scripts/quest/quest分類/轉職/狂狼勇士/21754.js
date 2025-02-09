/*
     名字：另一個封印石的情報
     地图：弓箭手培訓中心
     描述：100000201
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("狂狼勇士……狂狼勇士…，我就知道一定會再見到你的。因為你是個信守諾言的人，我相信你什麼時候一定會來找我的，所以一直在等著你……");
            break;
        case 1:
            qm.sendNextPrev("#p2131000#幸福地笑了。");
            break;
        case 2:
            qm.sendNextPrev("那時沒能給你的信，終於可以交給你了。過了這麼長時間，信已經很舊了……但應該還可以看。");
            break;
        case 3:
            qm.sendNextPrev("我雖然很想和你多說會兒話，但現在我擔任轉職官的功能工作，所以沒有時間，你以後再來找我吧。");
            break;
        case 4:
            qm.sendNextPrev("能幫上你的忙，我感到很高興，我的朋友…");
            break;
        case 5:
            qm.sendPrevS("從赫麗娜那裡收到了信#v4032328#…信裏是什麼內容呢？和#b特魯#k一起看看吧。", 3);
            break;
        case 6:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(21754).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4032328, qm.getPlayer().itemQuantity(4032328) ? 0 : 1);
            qm.dispose();
    }
}
