/*
     名字： 暗黑龙王留下来的东西…
地图: 九灵龙巢穴
          描述：240040612
 */

var status = -1;

function start(mode, type, selection) {
    if (mode === -1) {
        qm.dispose();
        return;
    } else if (mode === 0 && status == 0) {
        qm.dispose();
        return;
    } else {
        if (mode === 1) {
            status++;
        } else {
            status--;
        }
        if (status === 0) {
            qm.sendSimple("啾......咕噜噜噜......\r\n\r\n#b#L0#（啊，好可爱！走过去看看。）#l");
        } else if (status === 1) {
            qm.sendSimple("啾......咳咳！......咳咳！......咳！\r\n\r\n#b#L0#（嗓子里好像卡着什么东西.您想把它吐出来吗？）#l");
        } else if (status === 2) {
            qm.sendNext("小龙吐出了一块红色的石头.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2041200# #t2041200#1 个\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 42000 经验值");
        } else if (status === 3) {
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).isFull()) {
                qm.sendOk("消耗道具窗口的栏位不足。请清理一些空间后再来找我。");
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getItemQuantity(2041200, false) > 0) {
                qm.sendOk("你已经拥有了这个道具。");
            } else {
                Packages.server.quest.MapleQuest.getInstance(3714).forceComplete(qm.getPlayer(), qm.getNpc());
                qm.gainItem(2041200, 1);
                qm.gainExp(42000);
            }
            qm.dispose();
        }
    }
}
