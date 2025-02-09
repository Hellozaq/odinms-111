/*
     名字：永不放棄
     地图：寶貝龍
     描述：寶貝龍
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
            qm.sendNext("我的同族都消失了嗎，主人？一個都沒剩下嗎？就只有我一個？幾百年前，那個邪惡的人為什麼要殺死我的同族呢？為什麼只有我留下來了呢？我什麼都不知道……。");
            break;
        case 1:
            qm.sendNextPrevS("#p1013000#……");
            break;
        case 2:
            qm.sendYesNo("不過，我絕不會放棄。我可是堅強不屈的龍，說不定有些我的同族也像我一樣活在某處，我一定要找到我的同族，你會幫我的吧？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20966 exp");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(22565).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(20966);
            qm.dispose();
    }
}
