/*
     名字：跟隨騎士的腳步
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("真是的…你這麼悠閒。讓你這樣有實力的人閒著這是騎士團的損失呢…");
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
            qm.sendNext("好久不見。這段時間你真的變強了。目前皇家騎士團應該沒有比你更強的騎士吧。因為騎士團長也會對你招架不住呢...閒聊到此為止，進入正題吧？");
            break;
        case 1:
            qm.sendNextPrev("這是新的任務。根據不久前收集的情報，黑色翅膀的成員中有人企圖對女皇不利。雖然騎士團的上級騎士優納米斯已經採取行動以防未然，但是憑他自己還是會有困難。");
            break;
        case 2:
            qm.sendAcceptDecline("如果是維多利亞島那還好，但是艾納斯是尚未掌握騎士團情報員的地區因此需要支援。請你支援優納米斯吧。他最後聯絡的地方是#m211000000#，就請到#b#m211000000##k去尋找#r#p1103000##k吧。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(20400).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
