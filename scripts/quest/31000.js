/*
     名字：天上之島克里塞
     地图：天天空之城公園
     描述：200000200
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
                qm.sendOk("你還沒做好準備嗎？ 如果你改變了主意，可以再來找我。");
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31000)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(31000).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("怎麼現在才來？你不知道我等了多久。");
            break;
        case 1:
            qm.sendNextPrev("在天空之城的上空，有一個名叫克裏塞的空中之島。那裡生活著體型巨大，但是性格善良的巨人族。但是從不久前開始，克裏塞開始變得越來越遠，聯絡也中斷了。一定是發生了什麼事……要是可以的話，我真想馬上過去看看。但是你也知道，我無法離開這裡。");
            break;
        case 2:
            qm.sendAcceptDecline("你能幫我去確認一下克裏塞到底發生了什麼事情嗎？我把你送到克裏塞去。回來之後，一定要告訴我發生了什麼事情。");
            break;
        case 3:
            qm.sendPrev("我們現在就開始出發，這將會是一段很長的旅程。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
            break;
        case 4:
            qm.dispose();
            qm.gainExp(3000);
            Packages.server.quest.MapleQuest.getInstance(31000).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(200100001), qm.getMap(200100001).getPortal(0));
    }
}
