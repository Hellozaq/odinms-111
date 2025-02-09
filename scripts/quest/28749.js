/*
     名字：英勇搭救
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
            if (status > 1) {
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
            qm.sendNext("我仔細想了想，那幫外星人會綁架市民估計是不想讓目擊者把它們的存在傳播出去！我們得救出人質，告訴大家這一消息。");
            break;
        case 1:
            qm.sendNextPrev("是時候發揮你的能力了！去把那些老百姓救出來吧，雖然我也不知道該怎麼去救他們，但你可不能放弃啊！");
            break;
        case 2:
            qm.sendAcceptDecline("你說你是在基地附近看到他們的，這倒是讓我想起了，有些市民說他們目擊到田野上有奇怪的矩形容器，我猜那些東西其實就是囚籠，你快去看看能不能把人從那裡頭弄出來！");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(28749).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("還等什麼呢？要是再有人被外星人抓去當奴隸，那就沒人給我投票了！！！\r\n\r\n#m600010300#的人質：#b(#u28764#)#k \r\n\r\n#m600010400#的人質：#b(#u28766#)#k \r\n\r\n#m600010400#的人質：#b(#u28762#)#k \r\n\r\n#m600010200#的人質：#b(#u28763#)#k \r\n\r\n#m600010100#的人質：#b(#u28765#)#k");
            break;
        case 1:
            qm.dispose();
    }
}
