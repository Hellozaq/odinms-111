/*
     名字：那因哈特救援
     地图：被破壞的弓箭手村
     描述：271010000
 */

var status = -1;

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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31146)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(31146).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 1) {
                qm.sendOk("請先把周圍監視我的怪物消滅掉。在這之前，我什麼都不會跟你說……");
                qm.dispose();
                return;
            }
            qm.sendNext("謝謝你來救我。但是我想繼續留在這裡。如果他們發現我不見了，可能會招來更嚴重的災難。留在這裡，說不定還能做點什麼。");
            break;
        case 1:
            qm.sendNextPrev("請你幫我轉告阿勒斯。");
            break;
        case 2:
            qm.sendPrev("還有……請你阻止她。我們無法讓西格諾斯恢復原狀。這也是沒有辦法的辦法。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(31146).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(11659200);
            qm.dispose();
    }
}
