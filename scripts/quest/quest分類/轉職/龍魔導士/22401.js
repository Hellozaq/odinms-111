/*
     名字：龍可以騎嗎？
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
            if (status < 5) {
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
            qm.sendSimple("主人，有什麼事嗎？你有什麼話要說嗎？嗯？騎乘？騎乘的話，是說騎豬、騎鳥、騎狼之類的吧？怎麼突然提到這個？\r\n#L0##b我想知道歐尼斯龍能不能騎？怎麼樣？可以嗎？#l");
            break;
        case 1:
            qm.sendSimple("騎歐尼斯龍……嗯？！你是說想騎我嗎？我是主人的夥伴啊？嗚嗚，主人太過分了~我說過不是寵物！\r\n#L0##b我們是夥伴，你應該可以讓我騎吧？#l");
            break;
        case 2:
            qm.sendSimple("哈，怎麼說話那麼酷？好吧！那我累的時候，主人你也要讓我騎啊！可以嗎？那我就讓你騎。\r\n#L0##b……你想讓我死嗎？#l");
            break;
        case 3:
            qm.sendSimple("切，開個玩笑。過去的我可能還行，現在的話，一定會把主人壓扁的。但是反過來應該沒有問題。主人的個頭又不高。\r\n#L0##b那就是可以騎囉？#l");
            break;
        case 4:
            qm.sendSimple("嗯，我飛得比主人快得多，從效率上來說，這個主意好像不錯。但是光這樣是沒辦法騎的，必須準備兩樣東西。\r\n#L0##b兩樣東西？#l");
            break;
        case 5:
            qm.sendNextPrev("必須要有馬鞍和騎乘技能。不墊墊東西就坐在我背上的話，屁股一定會開花的。不會騎乘技能的話，可能會從我身上掉下去。所以必須準備這兩樣東西。");
            break;
        case 6:
            qm.sendPrev("去問問漢斯騎龍的事情，他應該會告訴你獲得馬鞍和學習技能的方法，先去見見#b#p1032001##k吧。");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(22401).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
