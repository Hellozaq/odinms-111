/*
     名字：另一個封印石的情報
     地图：弓箭手培訓中心
     描述：100000201
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
            qm.sendNext("剛才聽到圖書館裡面有什麼聲音傳出來……是你嗎，狂狼勇士，封印石找到了嗎？");
            break;
        case 1:
            qm.sendNextPrevS("講述圖書館裏發生的事情。");
            break;
        case 2:
            qm.sendNextPrev("……那些傢夥竟然在這裡出現……對不起，狂狼勇士，我應該好好保管的……");
            break;
        case 3:
            qm.sendNextPrevS("#p2131000#，這不是你的錯。");
            break;
        case 4:
            qm.sendNextPrev("你還是老樣子啊。不過……剛剛聽你提到有關封印石的事情後，讓我想起了一個線索。");
            break;
        case 5:
            qm.sendNextPrevS("線索？");
            break;
        case 6:
            qm.sendNextPrev("是的，我發現了一封你過去寫的信件中，裡面有和封印石有關的線索，你想看看嗎？");
            break;
        case 7:
            qm.sendNextPrev("……咦？信件……");
            break;
        case 8:
            qm.sendNextPrevS("#v4032327#無法接到信件。信件透過了手，掉到了地上。");
            break;
        case 9:
            qm.sendNextPrev("……雖然我不太清楚時間的法則……但我們無法傳遞這封信的原因，也許是因為我們屬於兩個不同時空的人的關係……真讓人傷感，不久之前我們還是同伴呢……");
            break;
        case 10:
            qm.sendNextPrev("…狂狼勇士…你也知道，我們妖精可以活很長時間。雖然你成為了幾百年以後的人，但我應該也能活到那個時候。所以，我會好好幫你保管這封信件，請你先回到你的那個時代，再過來找我吧。");
            break;
        case 11:
            qm.sendNextPrev("即使經過數百年的時間，我也不會忘記這個約定，更不會忘記狂狼勇士，讓我們以後再見吧，我會等你的。");
            break;
        case 12:
            qm.sendPrevS("回到莉琳所存在的時間，去找找赫麗娜吧。請求特魯幫忙，肯定可以找到#p2131000#的。", 3);
            break;
        case 13:
            Packages.server.quest.MapleQuest.getInstance(21753).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
