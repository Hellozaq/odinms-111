/*
     名字：菲利屋司
     地图：結冰的精靈森林
     描述：910150001
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
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
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24007)).getStatus() > 0) {
                cm.sendOk("我的精靈國王，只有你能拯救這一切。");
                cm.dispose();
                return;
            }
            cm.sendNextS("長老們！大家沒事吧！但是……但是我們的村子……", 3);
            break;
        case 1:
            cm.sendNextPrevS("非常寒冷的氣息包圍了村子，精靈國王，在你身上也能感覺到強烈的寒氣。", 1);
            break;
        case 2:
            cm.sendNextPrevS("你身上的寒氣是最強烈的！難道……這是黑魔法師的力量？！", 5, 1033203);
            break;
        case 3:
            cm.sendNextPrevS("……小孩子們開始被封在冰裏，再過一段時間，連大人們都……好像力量越強，受那種氣息的影響就越慢，雖然我們還在堅持，不過也堅持不了太久……", 5, 1033204);
            break;
        case 4:
            cm.sendNextPrevS("這一切……都是我的錯……雖然封印黑魔法師成功了，但是他留下的#b詛咒#k……連我們村……", 3);
            break;
        case 5:
            cm.sendNextPrevS("詛咒？！", 5, 1033203);
            break;
        case 6:
            cm.sendNextPrevS("就是把村子冰起來的這個力量……", 5, 1033204);
            break;
        case 7:
            cm.sendNextPrevS("原來黑魔法師對國王詛咒，所有精靈都會受到影響啊……", 1);
            break;
        case 8:
            cm.sendNextPrevS("對不起……全都是我的錯，要是我沒有被黑魔法師詛咒的話……", 3);
            break;
        case 9:
            cm.sendNextPrevS("讓楓之谷世界陷入絕境的黑魔法師……真是個可怕的人，雖然封印成功了，但還是這麼厲害……沒想到我們竟然能把他封印起來。", 1);
            break;
        case 10:
            cm.sendNextPrevS("精靈國王，連你這麼強的人都無法封鎖的詛咒，其他人就更不可能封鎖了。", 5, 1033204);
            break;
        case 11:
            cm.sendNextPrevS("精靈國王！這不是你的錯！封印成功了！都是因為邪惡的黑魔法師！", 5, 1033203);
            break;
        case 12:
            cm.sendNextPrevS("但是……我應該避免這種事情發生，也許我當初不應該去和黑魔法師戰鬥！……讓精靈們落入了現在的境地……雖然我是國王，但我沒有這樣的資格！", 3);
            break;
        case 13:
            cm.sendNextPrevS("別說這種話，精靈國王，和黑魔法師的戰鬥要是能避免的話……我們也不會讓你，讓我們的國王到那麼危險的地方去戰鬥。", 5, 1033204);
            break;
        case 14:
            cm.sendNextPrevS("該說抱歉的反倒是我們，你成為國王還沒多久……就因為你是我們中力量最強的人而讓你去面對黑魔法師……", 1);
            break;
        case 15:
            cm.sendNextPrevS("我這個戰鬥長老太弱了，無法和黑魔法師戰鬥，我……我才應該跟你說抱歉……", 5, 1033203);
            break;
        case 16:
            cm.sendNextPrevS("不，不是長老們的錯！是我說要去和黑魔法師戰鬥的……我並不後悔參戰，我後悔的只是沒能保護好你們而已……", 3);
            break;
        case 17:
            cm.sendNextPrevS("那是我們所有人的責任。", 1);
            break;
        case 18:
            cm.sendNextPrevS("你沒有必要一個人背負這個責任，和黑魔法師戰鬥是我們全體精靈的決定，詛咒也必須由我們全體精靈來承擔。", 5, 1033204);
            break;
        case 19:
            cm.sendNextPrevS("被凍起來的人們都在擔心你，沒有任何人抱怨你！", 5, 1033203);
            break;
        case 20:
            cm.sendNextPrevS("大家…", 3);
            break;
        case 21:
            cm.sendNextPrevS("真正可怕的不是詛咒，要是我們精靈相互埋怨，忘記了互敬互愛之心，那才是真正可怕的事情，不管黑魔法師的詛咒多麼可怕，只要我們能活下去，就一定有辦法。", 1);
            break;
        case 22:
            cm.sendNextPrevS("只要有你在，我們精靈就還有希望。", 1);
            break;
        case 23:
            cm.sendNextPrevS("有什麼……辦法嗎？", 3);
            break;
        case 24:
            cm.sendNextPrevS("現在要封鎖詛咒好像太難了，但我們是精靈，是可以生活很長時間的人……時間總是站在我們一邊。", 1);
            break;
        case 25:
            cm.sendNextPrevS("如果詛咒無法避免的話，請在黑魔法師的詛咒讓我們全部沉睡之前，先把村莊完全封印起來，再和所有的精靈一起#b沉睡#k，直到封印解開為止。", 1);
            break;
        case 26:
            cm.sendNextPrevS("雖然我不知道詛咒什麼時候才會解開，但是我們沒有必要害怕時間。讓我們耐心地等待吧，精靈國王。", 5, 1033204);
            break;
        case 27:
            cm.sendNextPrevS("等大家都醒來的時候，黑魔法師的詛咒應該就會解開！", 5, 1033203);
            break;
        case 28:
            cm.sendNextPrevS("就算是黑魔法師的詛咒，也無法戰勝時間的力量……最終的勝利，必定是屬於我們的。", 1);
            break;
        case 29:
            cm.sendNextPrevS("是的……我們一定要堅持下去！", 3);
            break;
        case 30:
            cm.sendNextPrevS("那當然，啊…我也無法抵擋住詛咒的力量了。快去把村子封印起來吧，精靈國王，讓我們在漫長的歲月中沉睡，等待詛咒解開的時候，不要有昂張的人來玷污我們美麗的村莊…", 1);
            break;
        case 31:
            cm.sendNextPrevS("在封印之前，需要做幾樣準備，你最好先去去問問亞斯提那。", 1);
            break;
        case 32:
            Packages.server.quest.MapleQuest.getInstance(24007).forceStart(cm.getPlayer(), 0, 1);
            cm.dispose();
    }
}
