/*
     名字：麥克
     地图：奇幻村
     描述：105000000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2048)).getStatus() != 1) {
        cm.sendOk("... ... ... zzz...");
        cm.dispose();
        return;
    }
    cm.sendOk("最近發現了一個古老的文書，裡面記載著許多有關神秘物品的內容。星石和冰塊應該是與魔法森林的妖精們有關的物品，古代卷軸會不會是與古代法師們製作的巨人相關啊？至於火焰羽毛倒是讓我聯想到噴火的龍族…");
    cm.dispose();
}
