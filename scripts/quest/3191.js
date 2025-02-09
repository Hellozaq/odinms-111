/*
     名字：禁忌的普利斯特
     地图：冰原雪域市集
     描述：211000100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 3) {
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
            qm.sendNext("這次事件的原因好像是#b#o6090000##k，禁忌魔法的痕跡也很相似。");
            break;
        case 1:
            qm.sendNextPrev("必須儘快消滅掉才行，不知道僵屍什麼時候會再次襲擊村子……");
            break;
        case 2:
            qm.sendNextPrev("厄運死神不是簡單就能對付的怪物，必須破壞掉厄運死神的魔力和生命的根源，才能把他除掉。但是沒有任何人能找到那個根源，連我都無法找到。根源沒有被破壞掉的話，就算打敗了厄運死神，他也會#b重新復活#k。");
            break;
        case 3:
            qm.sendAcceptDecline("並不是完全沒有辦法，雖然無法封鎖厄運死神的復活，但是禁忌魔法是有辦法封鎖的。在死亡之林設定強力結界的話，就能防止禁忌魔法導致僵屍數量新增，你想試試看嗎？");
            break;
        case 4:
            qm.sendPrev("為了設定結界，需要結界圖騰。雖然我可以使用魔法製作結界圖騰，但是需要厄運死神擁有的#b紅色契約之珠#k和#b厄運之書#k各1個還有一塊智慧水晶，所以請你去幫我蒐集。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(3191).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
