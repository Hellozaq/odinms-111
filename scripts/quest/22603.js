/*
     名字：脫皮之後2
     地图：寶貝龍
     描述：寶貝龍
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
            qm.sendNext("主人，你看，這次成長之後，我的力量幾乎已經完整了。");
            break;
        case 1:
            qm.sendNextPrevS("嗯，看上去就感覺很有氣勢，這就是歐尼斯龍的真正力量嗎？");
            break;
        case 2:
            qm.sendNextPrev("這是歐尼斯龍的力量，同時也是主人的力量，歐尼斯龍只有在契約者變強的時候才會成長，也就是說，主人你也同樣成長了。");
            break;
        case 3:
            qm.sendNextPrevS("果然……你現在越來越會說話了，#p1013000#。");
            break;
        case 4:
            qm.sendNextPrev("呵呵，那當然！我這麼優雅的外表，如果太輕狂的話，豈不會被人笑掉大牙？對了主人，和上次一樣，這次蛻皮之後又留下了一塊鱗片，裡面含有比以前更強的力量，我想應該會對你有所幫助，來，拿著！！");
            break;
        case 5:
            qm.sendPrev("雖然因為龍魔導士是人類，會受到怪物的攻擊，可是說不定那塊鱗片可以保護龍魔導士。如果龍魔導士變強，我也會變得更加強大……我們一起強大起來吧，主人！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4032503# #t4032503# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30000 exp");
            break;
        case 6:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(22603).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4032503, 1);
            qm.dispose();
    }
}
