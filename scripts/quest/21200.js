/*
     名字：武器選擇主人
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 0) {
                qm.sendOk("即使修煉在忙，你也一定得要回來。");
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
            qm.sendAcceptDecline("修煉練得怎麼樣了？哇，這麼一看你的等級提升了不少啊。馬要送到濟州島，低級送到維多利亞島。這話果然沒錯啊…對了，現在不是講這些的時候。真是不好意思，我只知道你很忙，但是你得回島一趟了。");
            break;
        case 0:
            qm.sendAcceptDecline("保管於瑞恩村裡的巨大的矛，突然產生了奇怪的反應。根據記載，只有矛呼叫主人的時候會出現這樣的反應。可能是想傳達給你，快點回島上來確認一下吧。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(21200).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 11) {
                qm.sendOkS("實在是想不起來，我又能有什麼辦法？", 3);
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
            qm.sendNext("嗡嗡嗡嗡嗡……");
            break;
        case 1:
            qm.sendNextPrevS("巨大的矛在發出嗡鳴聲。奇怪，那邊的少年是誰？");
            break;
        case 2:
            qm.sendNextPrevS("以前沒見過他啊？怎麼看起來不太像人類。");
            break;
        case 3:
            qm.sendNextPrev("呀！狂狼勇士~還聽不見我的聲音嗎？到底聽不聽得見？唉，氣死人了！");
            break;
        case 4:
            qm.sendNextPrevS("咦？這是誰的聲音？怎麼聽起來像個凶巴巴的少年……");
            break;
        case 5:
            qm.sendNextPrev("哎呀…主人在冰雪當中困了數百年，把武器都丟著不管，現在連話都聽不到了……...");
            break;
        case 6:
            qm.sendNextPrevS("你是誰啊？");
            break;
        case 7:
            qm.sendNextPrev("啊，現在聽到我的聲音了？是我啊，不記得了嗎？我是你的武器——#b瑪哈#k啊。");
            break;
        case 8:
            qm.sendNextPrevS(".……#b瑪哈#k？巨大的矛會說話？");
            break;
        case 9:
            qm.sendNextPrev("什麼嘛！這種不可置信的表情？再怎麼失憶，總不能連我都忘了吧？怎麼會有這種事啊？");
            break;
        case 10:
            qm.sendNextPrevS("很抱歉，我什麼都不記得了...");
            break;
        case 11:
            qm.sendAcceptDecline("抱歉就算了嗎？！你知道這數百年來我一個人有多麼孤獨嗎？不管怎樣，你快點給我想起來！");
            break;
        case 12:
            qm.sendPrevS("說自己是巨大的矛——瑪哈，聲音聽起來還很生氣。再這麼說下去也不會有什麼進展，還是先找莉琳商量看看。", 3);
            break;
        case 13:
            Packages.server.quest.MapleQuest.getInstance(21200).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(914090200), qm.getMap(914090200).getPortal(0));
            qm.dispose();
    }
}
