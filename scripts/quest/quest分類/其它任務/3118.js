/*
     名字：邪摩斯的找回的記憶
     地图：邪摩斯的單人房
     描述：211000002
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
            qm.sendNext("上次你幫忙取得的日記幫了很大的忙。現在應該對於我會更了解了。但是還是會像以前一樣會失去理智！現在你看到的也是趁著完全恢復理智時所寫的信。這樣感覺不是很好！日記如果和我逐漸回想起的記憶是一樣的話，將可能會發生非常危險的事。我需要你的幫助。\r\n#b你的朋友邪摩斯");
            break;
        case 1:
            qm.sendYesNoS("朋……朋友？什麼時候和邪摩斯變成朋友了啊？我還不知道邪摩斯到底想幹什麼呢，我能相信他嗎？不管怎樣，有時間的話，先去見見#b邪摩斯吧#k。", 3);
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(3118).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
