/*
     名字：對於秘密團體的疑惑
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
            qm.sendNext("喂，主人，你不覺得有點奇怪嗎？剛才做的黑色翅膀的任務……有很多可疑之處…，我還以為從#o9001028#手上解救出#t4000144#是件好事呢…");
            break;
        case 1:
            qm.sendNextPrev("沒有必要…故意把那個東西放在袋子裏，對吧？而且必須在天空露臺前面打開，好像有點奇怪。如果要讓它回歸自由的話，在什麼地方放走應該都一樣啊？");
            break;
        case 2:
            qm.sendNextPrev("嗯，放出去之後，你聽到衛兵們在發火嗎？說對他們站崗造成了妨礙，對吧？衛兵是壞人嗎？");
            break;
        case 3:
            qm.sendNextPrev("而且門鎖消失的時候說的話……太奇怪了。說我們是小偷……雖然消滅了怪物，但我的心裡感覺很不好受。");
            break;
        case 4:
            qm.sendNextPrev("雖然那個名叫伊培賀的人類讓我們不要在意，但我想來想去還是覺得很奇怪。這次的事情好像不是什麼好事，你覺得呢，主人？");
            break;
        case 5:
            qm.sendPrev("名叫黑色翅膀的團體……那是個秘密團體，一定隱藏著某種我們不知道的事情，對吧？雖然我不想去懷疑……但還是覺得很可疑。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30000 exp");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(22585).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(30000);
            qm.dispose();
    }
}
