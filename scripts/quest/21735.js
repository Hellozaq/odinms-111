/*
     名字：維多利亞島的封印石
     地图：特魯的情報商店
     描述：104000004
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
            qm.sendNext("#t4032323#我已經找到了。你看#v4032323#…呵…呵呵。");
            break;
        case 1:
            qm.sendNextPrevS("！！……你怎麼找到的？");
            break;
        case 2:
            qm.sendNextPrev("上次被傀儡師攻擊後，我動員了所有的情報網搜遍了整個維多利亞。我怎麼可能坐以待斃？一定要搶在他們前面找到他們想要的東西……也算是報了上次一箭之仇。 ");
            break;
        case 3:
            qm.sendNextPrev("不過，黑色翅膀的傢夥們已經認識我了，我再拿著這個恐怕不太安全。英雄大人拿著它走來走去，弄丟了也不好……要不還是交給#b#p1201000##k保管吧。");
            break;
        case 4:
            qm.sendNextPrev("瑞恩島上一直都只有莉琳一族生活。為了不讓其他人類接近，他們在島上設定了各種咒術，黑色翅膀要想找到他們恐怕沒那麼容易。");
            break;
        case 5:
            qm.sendNextPrev("我打算以後不再讓你去做收集情報的工作了，你現在已經對楓之谷的世界有了一定的瞭解，現在也是時候自己去積累經驗了吧？");
            break;
        case 6:
            qm.sendPrev("不過我打算集中全力，去收集與黑色翅膀相關事件的情報，更何況，關於封印石也有必要繼續打聽，如果有什麼新消息，我會聯系你的#k，日後再見，英雄大人。");
            break;
        case 7:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(21735).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4032323, qm.getPlayer().itemQuantity(4032323) ? 0 : 1);
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
            qm.sendNext("對於黑色翅膀的行動從特魯那裡一直聽說了，前段時間也被襲擊了，你怎麼樣啊？嗯？這…這就是#b#z4032323##k嗎？結果還是被#p1002104#比他們先找到了#t4032323#。");
            break;
        case 1:
            qm.sendPrev("不知道這顆寶石到底有什麼用……只知道這個東西肯定和黑魔法師有關。既然那些傢夥在找這個東西，我們一定要保護好這個東西。看來不論發生什麼，你都要不斷地變得更強，才行。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 6037 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(21735).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4032323, -1);
            qm.gainExp(6037);
            qm.dispose();
    }
}
