/*
     名字：瓦尼
     地图：埃德爾斯坦
     描述：310000000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23938)).getStatus() != 1) {
        cm.sendOk("不想被我監視你就讓開。");
        cm.dispose();
        return;
    }
    cal = java.util.Calendar.getInstance();
    hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    if (hour > 20 && hour < 23) {
        Packages.server.quest.MapleQuest.getInstance(23984).forceStart(cm.getPlayer(), 0, 1);
        cm.sendOk("請你幫我轉告赫力泰，我只是想守護好我的情人卡普利爾，如果沒有其它的事，以後請不要在來找我。");
        cm.dispose();
        return;
    }
    cm.sendOk("是赫力泰讓你過來的嗎？現在不是交談的時間，這個附近到處都有黑色翅膀的人在監視著。");
    cm.dispose();
}
