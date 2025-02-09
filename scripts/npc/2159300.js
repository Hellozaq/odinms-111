/*
     名字：帕必歐
     地图：可疑的美髮店
     描述：931010030
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
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
            if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
                cm.sendNext("你突然來我這裡幹什麼，美髮店現在已經關門了，快給我出去！");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23979)).getStatus() > 0) {
                cm.sendNext("沒有什麼好談的了，再這樣下去，美髮店都快倒閉了！");
                cm.dispose();
                return;
            }
            cm.sendNext("幹，幹嘛！竟然把我好不容易弄到的火焰炸彈弄壞了！你知道這值多少錢嗎？這可是我為了研究新的燙髮技術，特地花大價錢買來的！");
            break;
        case 1:
            cm.sendPrev("什麼？是監視者命令你來監視我的？連追求完美髮型的自由都沒有嗎？真是忍無可忍！我一定要他賠償我！");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23979).forceStart(cm.getPlayer(), 0, 1);
            cm.dispose();
    }
}
