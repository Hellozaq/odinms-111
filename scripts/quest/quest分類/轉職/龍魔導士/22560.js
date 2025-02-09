/*
     名字：秘密團體加入條件1
     地图：遺棄的洞穴
     描述：910050300
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
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
            qm.sendNext("好久不見，恩人！主人的傷勢已經好了，正在忙著尋找落腳點，一直沒有跟我聯系，不久前，他終於和我聯繫了！");
            break;
        case 1:
            qm.sendNextPrev("我跟主人說了你的事情，他說如果你是好人的話，隨時歡迎加入他的團體！但有個條件，要想加入團體，好像要通過最基本的測試。");
            break;
        case 2:
            qm.sendYesNo("像恩人這麼強的人，我想應該很容易就能通過那種測試，需要我說明一下測試的內容嗎？");
            break;
        case 3:
            qm.sendNextPrev("測試非常的簡單！你只要前往#b#m101000000#的#m101030100##k，消滅#r150隻#o3230100##k就行，主人想在那裡建造根據地，現在正因#o3230100#的威脅而發愁。");
            break;
        case 4:
            qm.sendPrev("當然能在其它地方建立根據地的話就更好了……但是不久前他想在有個叫什麼寺院的地方建立根據地，結果那裡的怪物太強，發生了#b暴亂#k，所以這次他很慎重。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(22560).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
