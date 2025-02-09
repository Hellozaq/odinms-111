/*
     名字：傑利麥勒的陷阱
     地图：秘密廣場
     描述：310010000
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
            qm.sendNextS("不能再這樣下去了，斐勒只是無辜的犧牲者！無論如何，都必須把他救出來。請你允許我去把斐勒救出來吧！", 3);
            break;
        case 1:
            qm.sendNextPrev("我……不能讓你去。解毒劑還沒完成，現在可以動員的人手……太少了。這件事明顯是個陷阱，我不能讓他們因為這種事而白白犧牲。");
            break;
        case 2:
            qm.sendNextPrevS("我一個人也要去！");
            break;
        case 3:
            qm.sendNextPrev("那太危險了！");
            break;
        case 4:
            qm.sendNextPrevS("斐勒是我的朋友！");
            break;
        case 5:
            qm.sendNextPrev("……");
            break;
        case 6:
            qm.sendNextPrev("……我不能阻止你去救自己的朋友，但是記住，如果連你也失手的話，就沒人可以去救斐勒了。所以一定要注意自己的安全。");
            break;
        case 7:
            qm.sendNextPrev("……皇家騎士團……說要幫助我的時候……我應該聽他們的話嗎？");
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(23144).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
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
            qm.sendNextS("斐勒！", 3);
            break;
        case 1:
            qm.sendNextPrevS("#h0#……？", 1);
            break;
        case 2:
            qm.sendNextPrevS("你醒了！上次你都不認識我了！快出去吧！", 3);
            break;
        case 3:
            qm.sendNextPrevS("你怎麼會在這裡……傻瓜。為什麼到這裡來！這是陷阱！傑利麥勒為了擊破末日反抗軍而設置了這個陷阱！你不能到這裡來！", 1);
            break;
        case 4:
            qm.sendNextPrevS("沒時間說那種話了！我們一起逃走不就行了！", 3);
            break;
        case 5:
            qm.sendNextPrevS("不能逃走！我……我是傑利麥勒的實驗體！洗腦效果還沒解開！就算跟你走了，我也只會變成末日反抗軍的妨礙！只會成為你們的負擔！我不想變成那樣！", 1);
            break;
        case 6:
            qm.sendNextPrevS("誰說你是妨礙了！你是我的朋友！", 3);
            break;
        case 7:
            qm.sendNextPrevS("……", 1);
            break;
        case 8:
            qm.sendNextPrevS("對不起。老實說，我也有點懷疑你。你真的不是黑色翅膀的間諜嗎……我還在想如果你真的是間諜，那該怎麼辦。但你不是間諜，只是被傑利麥勒操縱罷了，不是嗎？那是傑利麥勒幹的！你用不著自責！快走吧！", 3);
            break;
        case 9:
            qm.sendNextPrevS("……你……你真的是個好朋友。", 1);
            break;
        case 10:
            qm.sendNextPrevS("斐勒？", 3);
            break;
        case 11:
            qm.sendNextPrevS("但是我真的沒辦法逃走。離開這裡的話，我體內的炸彈就會爆炸……", 1);
            break;
        case 12:
            qm.sendNextPrevS("！！", 3);
            break;
        case 13:
            qm.sendNextPrevS("更大的問題是，那個炸彈……只要稍微有一點震動，就會自動爆炸。", 1);
            break;
        case 14:
            qm.sendNextPrevS("什麼？！可惡……沒辦法摘除嗎？！", 3);
            break;
        case 15:
            qm.sendNextPrevS("傑利麥勒把我當作誘餌，等好心的末日反抗軍過來救我的時候，就引爆炸彈，讓所有人全部消失……但也不是完全沒有辦法。", 1);
            break;
        case 16:
            qm.sendNextPrevS("有什麼辦法？快說！", 3);
            break;
        case 17:
            qm.sendNextPrevS("我有一個回城卷軸，可以隨時回到村裡去……但是就算回到村裡，大家也會把我當成妨礙，不會接受我……所以我一直認為自己還是在這裡消失會比較好。", 1);
            break;
        case 18:
            qm.sendNextPrevS("但是聽你這麼一說，我非常想回到村裡去。沉著、多情的吉可穆德……勇敢的裴爾……看上去很冷酷，但其實人很好的赫力泰……可愛的傑奇和威德琳……長的很凶的伊萊克斯。大家全都是好人。", 1);
            break;
        case 19:
            qm.sendNextPrevS("是的，回去的話，大家一定會很高興的！", 3);
            break;
        case 20:
            qm.sendNextPrevS("嗯，但是……其實我對大家來說只是妨礙吧？給那些可愛的人吃危險的藥……從村裡逃走……這樣的事情可能還會發生。我是傑利麥勒製作的實驗體。", 1);
            break;
        case 21:
            qm.sendNextPrevS("大家會幫助你解除洗腦的！", 3);
            break;
        case 22:
            qm.sendNextPrevS("沒錯，是的……但正是因為這樣，我才不能回去……我不能給大家添麻煩。不能……不能……", 1);
            break;
        case 23:
            qm.sendNextPrevS("所以……你自己一定要活下去。", 1);
            break;
        case 24:
            qm.sendNextPrevS("斐勒！", 3);
            break;
        case 25:
            qm.sendNextPrevS("和其他人一起努力……一定要消滅黑色翅膀，阻止傑利麥勒的惡行。", 1);
            break;
        case 26:
            qm.sendNextPrevS("等等！", 3);
            break;
        case 27:
            qm.dispose();
            Packages.server.quest.MapleQuest.getInstance(23144).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(931000632), qm.getMap(931000632).getPortal(0));
    }
}
