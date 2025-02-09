/*
     名字：飢餓的小龍
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
            if (status == 3) {
                qm.sendOk("你怎麽能拒絕餵你的龍，這是虐待兒童！");
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
            qm.sendNext("喲，主人！！現在我已經向你展示了我能做什麽，輪到你了，證明給我……你可以找到食物！我要餓死了，所以你必須照顧我。");
            break;
        case 1:
            qm.sendNextPrevS("唉，我還是不明白發生了什麽，但是我不能讓像你這樣的可憐的小家夥挨餓，對吧？食物，你說呢？你想吃什麽？");
            break;
        case 2:
            qm.sendNextPrev("我剛出生還沒幾分鐘，我怎麽知道我吃什麽？我只知道我是一條龍…我是你的龍。你是我的主人。你必須善待我！");
            break;
        case 3:
            qm.sendAcceptDecline("我想我們應該一起學習，但我餓了。主人，我想吃東西，記住，我是個嬰兒！我馬上就要哭了！");
            break;
        case 4:
            qm.sendPrevS("嬰兒龍看起來非常饑餓，你必須餵它，也許你爸爸可以給你一些關於龍吃的建議。", 3);
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(22501).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
