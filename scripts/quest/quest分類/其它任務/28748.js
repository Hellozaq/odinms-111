/*
     名字：破壞
     地图：新叶城
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
            qm.sendNext("我們不能讓那些外星人偷走我們寶貴的礦石！我們得，我想想，破壞它們的工作？對，就是這樣！去它們那兒大鬧一番吧！");
            break;
        case 1:
            qm.sendNextPrev("對了，要破壞它們的工作首先得製定一個周密的計畫，我這兒有四個主意！");
            break;
        case 2:
            qm.sendNextPrev("你的第一個目標位於森林峽谷，外星人在那兒屯了不少火藥堆，你把它們都給我點了，順便再把那些星際巨鑽給毀掉好了，它們看著就很脆弱的樣子，估計往它們挖的洞裏丟幾塊石頭它們就不行了！");
            break;
        case 3:
            qm.sendPrev("噢，我還想到了一個能嚇跑它們的主意！去把它們的樣本都偷走，再弄壞它們的電腦！如果我是外星人，那我肯定會把這些東西放在星際採礦基地的入口附近，希望這幫外星人用的作業系統跟我們的是一樣的……");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(28748).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28767)).getStatus() < 1 || qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28760)).getStatus() < 1 || qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28758)).getStatus() < 1 || qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(28757)).getStatus() < 1) {
                qm.sendOk("你還沒破壞够呢，還有許多能破壞的東西！\r\n\r\n破壞它們的電腦：#b(#u28767#)#k \r\n\r\n偷走它們的樣本：#b(#u28760#)#k \r\n\r\n往它們的鑽頭裏丟石子：#b(#u28758#)#k \r\n\r\n點燃它們的火藥堆：#b(#u28757#)#k");
                qm.dispose();
                return;
            }
            qm.sendNext("我就知道你能讓它們嘗到苦頭！");
            break;
        case 1:
            qm.sendNextPrev("外星人關押了許多人質，我感覺它們是要把他們煮來吃，我懂了，這幫外星人肯定是星際大廚！");
            break;
        case 2:
            qm.sendPrev("嗯，你的推論既可笑又不合理，但我還真想不出別的可能！不過，至少這些市民現在還活著。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(28748).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
