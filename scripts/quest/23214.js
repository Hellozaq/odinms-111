/*
     名字：和莫斯提馬的對練
     地图：艾德斯塔公園噴水台附近2
     描述：931050110
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("好了，走吧！那裡的我不是召喚獸的形象，而是過去的我。");
            break;
        case 1:
            qm.sendAcceptDecline("當然，畢竟只是幻象，並不像過去的我一樣強。但是那個次元是我的領域，所以在某種程度上也算很強。由於是其他次元，不能停留太長時間。請一定要記住！");
            break;
        case 2:
            if (qm.getMap(931050120).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23214).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(931050120).resetFully();
                qm.getPlayer().changeMap(qm.getMap(931050120), qm.getMap(931050120).getPortal(1));
                qm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001038), new java.awt.Point(714, -14));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(931050110));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "其他次元的艾德斯塔公園目前擁擠，請稍後再試"));
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
            qm.sendNext("修煉進行的怎麼樣呢？其它次元的我應該沒有說些莫名其妙的話吧？如果有成果的話，我要刻印下目前的狀態。");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 2) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(23214).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142343, 1);
            qm.gainItem(1322126, 1);
            qm.getPlayer().changeJob(3111);
            qm.sendNext("能幫上忙，真的讓人很高興！今天過度使用力量的關係，感覺特別累呢。快回去吧！什麼？幸苦了？不用客氣……");
            break;
        case 2:
            qm.sendNext("臉會變紅是因為用了太多力量的關係！");
            qm.dispose();
    }
}
