/*
     名字：弓箭手村
     地图：弓箭手村
     描述：100000000
 */

var map = [100000000, 100020400, 100040000, 101000000, 101020300, 101040300, 102000000, 102020500, 102030400, 102040200, 103000000, 103020200, 103030400, 103040000, 104000000, 104020000, 106020100, 120000000, 120000100, 120000101, 120020400, 120030000,
    200000000, 200010100, 200010300, 200080000, 200080100, 211000000, 211030000, 211040300, 211041200, 211041800,
    220000000, 220020300, 220040200, 221000000, 221020701, 221030600, 221040400, 222000000, 222010400, 222020000,
    230000000, 230010200, 230010201, 230010400, 230020000, 230020201, 230030100, 230040000, 230040200, 230040400,
    250000000, 250010300, 250010304, 250010500, 250010504, 250020300, 251000000, 251010200, 251010402, 251010500,
    260000000, 260010300, 260010600, 260020300, 260020700, 261000000, 261010100, 261020000, 261020401, 261030000,
    240000000, 240010200, 240010800, 240020101, 240020102, 240020401, 240020402, 240030000, 240040400, 240040511, 240040521, 240050000, 924000200, 924000201,
    105000000, 105010100, 105020100, 105020300, 105020400, 105030000, 105030100, 105030101, 105030102, 105030200, 105030300, 105030500, 105100100, 105100300];

function start() {
    if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24046)).getStatus() == 1) {
        Packages.server.quest.MapleQuest.getInstance(24094).forceStart(ms.getPlayer(), 0, 1);
        ms.getPlayer().dropMessage(-1, "沉睡了幾百年之後，這裡居然發展成為新的村莊。");
    }
    if (ms.getPlayer().getMap().getId() == 104000000) {
        if (ms.getSavedLocation("WORLDTOUR") == 2010000) {
            ms.getClient().getSession().write(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(0));
            ms.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("WORLDTOUR"));
        }
        ms.getClient().getSession().write(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/104000000", 3));
    }
    for (var i = 0; i < map.length; i++)
        if (ms.getPlayer().getMap().getId() == map[i]) {
            slot = i;
        }
    quest = slot < 22 ? 29005 : slot < 32 ? 29006 : slot < 42 ? 29007 : slot < 52 ? 29008 : slot < 62 ? 29009 : slot < 72 ? 29010 : slot < 86 ? 29011 : 29014;
    level = slot < 22 ? 15 : slot < 32 ? 30 : slot < 52 ? 20 : slot < 62 ? 30 : slot < 72 ? 25 : slot < 86 ? 60 : 40;
    top = quest == 29005 ? "新手探險家" : quest == 29006 ? "冰原雪域山脈探險家" : quest == 29007 ? "路德斯湖探險家" : quest == 29008 ? "海底探險家" : quest == 29009 ? "武陵桃園探險家" : quest == 29010 ? "納希沙漠探險家" : quest == 29011 ? "米納爾森林探險家" : "奇幻村探險家";
    if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest)).getStatus() < 1 && ms.getPlayer().getLevel() > level) {
        Packages.server.quest.MapleQuest.getInstance(quest).forceStart(ms.getPlayer(), 0, null);
        Packages.server.quest.MapleQuest.getInstance(quest - 1995).forceStart(ms.getPlayer(), 0, 0);
    }
    if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29013)).getStatus() < 1) {
        Packages.server.quest.MapleQuest.getInstance(29012).forceStart(ms.getPlayer(), 0, null);
        Packages.server.quest.MapleQuest.getInstance(29015).forceStart(ms.getPlayer(), 0, null);
        Packages.server.quest.MapleQuest.getInstance(29013).forceStart(ms.getPlayer(), 0, "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
    }
    x = ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29013)).getCustomData();
    y = ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest - 1995)).getCustomData();
    if (y != null) {
        ch = x[slot];
        if (ch == '0') {
            var next = x.substr(0, slot) + '1' + x.substr(slot + 1);
            ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29013)).setCustomData(next);
            ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest - 1995)).setCustomData(parseInt(y) + 1);
            ms.getPlayer().updateQuest(ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest - 1995)), true);
            ms.getPlayer().dropMessage(-1, "探险了 " + (parseInt(y) + 1) + "/" + (quest == 29005 ? 20 : 10) + " 个地区");
            ms.getPlayer().dropMessage(-1, "正在挑战称号 - " + top);
            ms.getPlayer().dropMessage(5, "正在挑战称号 - " + top + "。" + (parseInt(y) + 1) + "/" + (quest == 29005 ? 20 : 10) + "完成");
        }
    }
    ms.dispose();
}
