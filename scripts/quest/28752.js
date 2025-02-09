/*
     名字：從容逃逸
     地图：被破坏的新叶城
     描述：600000000
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
            qm.sendNext("你去哪了？我還以為那幫外星人把你洗腦成採礦奴隸了呢，你能逃出來真是太好了！");
            break;
        case 1:
            qm.sendNextPrev("噢，對了，你能再去他們的基地一趟嗎？");
            break;
        case 2:
            qm.sendNextPrev("別這麼看著我啊！我是讓你執行潜入破壞任務！");
            break;
        case 3:
            qm.sendNextPrev("就是這樣，我想讓你跑到外星人面前，讓他們見識下我們楓之谷人的待客之道！");
            break;
        case 4:
            qm.sendNextPrev("跟你說下任務細節吧！你給我回到外星人的基地裏，幹掉葛拉特鑽孔機！那個能走能動的怪物好像是它們的主機，你得小心點，它的裝備讓它在近身戰鬥中也不落下風，雖然是臺電腦來著。");
            break;
        case 5:
            qm.sendPrev("這活我就交給你了，新葉城的未來和整個世界的命運都掌握在你手中！你手中啊！");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(28752).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
