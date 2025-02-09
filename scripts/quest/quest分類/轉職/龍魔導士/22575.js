/*
     名字：秘密團體的第二個任務
     地图：黑色影子
     描述：黑色影子
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 6) {
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
            qm.sendSimple("你好，龍魔導士，啊，突然和你說話，把你嚇一跳吧，別擔心。我不是個奇怪的人，我是你加入的那個團體的成員。\r\n#L0##b你是剩下的玩偶的主人嗎？#l");
            break;
        case 1:
            qm.sendSimple("啊，你是說普蘭西斯吧，不是的。不過我確實是他的上級。之前在天空之城給你下達任務的人就是我。\r\n#L0##b你是說那張放在隱密的磚頭裡面的紙條嗎？#l");
            break;
        case 2:
            qm.sendSimple("是的！把寫著任務的紙條放在隱密的磚頭裡面的人就是我，你送來的成長催化劑我們已經收到了，真的非常感謝，你可幫了我們的大忙。\r\n#L0##b啊哈哈哈，助人為了是應該的。#l");
            break;
        case 3:
            qm.sendSimple("你太客氣了，雖然你還不是正式成員，但因為表現出色，所以團體內對你的評價很高。我想應該可以把這次的事情交給你。\r\n#L0##b這次的事情？你是說又有任務要交給我嗎？#l");
            break;
        case 4:
            qm.sendSimple("是的，這次的事情要比之前難很多，但相信你一定可以做到。只要到冰原雪域的亡者們的森林去消滅庫利殭屍，收集掉牙殭屍的臼齒就行.......\r\n#L0##b嗯？亡者們的森林？殭屍？(有種不好的預感.......)#l");
            break;
        case 5:
            qm.sendSimple("哈哈，雖然感覺不是很好，但那是製作某種重要物品必須要有的材料，請你去收集掉牙殭屍的臼齒150個，然後交給冰原雪域長老公館地下的名叫邪摩斯的人，那樣的話，邪摩斯會把約定的東西交給你。\r\n#L0##b恩恩恩恩....知道了，既然是重要的事情，那就必須去做。#l");
            break;
        case 6:
            qm.sendPrev("非常正確的態度，亡者們的森林可以透過長老公館最底層靠右邊開啟的門進入，當你完成任務之後，我會在聯繫你的。");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(22575).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
