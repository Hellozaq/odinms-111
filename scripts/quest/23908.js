/*
     名字：寶貝龍的反應
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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("主人！我們加入的組織和埃德爾斯坦的關係好像很可疑，不是嗎？我們幫他們執行任務，黑色翅膀成員的身份好像逐漸確定下來了……這真的是好事嗎？");
            break;
        case 1:
            qm.sendNextPrev("成為黑色翅膀的成員之後，好像對黑色翅膀這個組織卻越來越看不懂了。埃德爾斯坦的人們好像很討厭黑色翅膀，黑色翅膀真的是好人嗎？");
            break;
        case 2:
            qm.sendNextPrevS("我也不知道，總之我們現在能做的，好像只有去瞭解黑色翅膀的任務，不是嗎？");
            break;
        case 3:
            qm.sendPrev("啊～越來越搞不明白了，黑色翅膀到底是好組織，還是壞組織？");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(23908).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
