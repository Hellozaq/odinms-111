/*
     名字：埃德爾斯坦
     地图：秘密廣場
     描述：931000660
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            ms.dispose();
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
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 2000));
            break;
        case 1:
            ms.sendNextS("召集大家過來的原因，相信大家都已經知道了……是因為耶雷弗寄來了一封信。內容很簡單，為了應對黑魔法師的復活，提議建立聯盟。因此計畫在耶雷弗召開相關會議。", 5, 2151003);
            break;
        case 2:
            ms.sendNextPrevS("西格諾斯……好久沒聽到這個名字了。在埃德爾斯坦那個名字不是禁止提起的嗎？", 5, 2151000);
            break;
        case 3:
            ms.sendNextPrevS("我不想和沒有信用的傢伙……一起共事。但是他們應該不是為了聽到我們的這種回答，才會召開會議的，吉可穆德。", 5, 2151001);
            break;
        case 4:
            ms.sendNextPrevS("是的，斐勒事件……大家都記得嗎？", 5, 2151003);
            break;
        case 5:
            ms.sendNextPrevS("那件事之後，我們有繼續進行調查，發現了一個驚人的事實，那就是黑色翅膀的創始人的身份。", 5, 2151003);
            break;
        case 6:
            ms.sendNextPrevS("創始人？你不是說不知道是否存在的那個人嗎？", 5, 2151000);
            break;
        case 7:
            ms.sendNextPrevS("那個女人的名字叫殺人鯨，外表看上去像個少女，但其實已經活了好幾百年……是黑魔法師的軍團長。", 5, 2151003);
            break;
        case 8:
            ms.sendNextPrevS("她選擇了不同的道路……她創建了黑色翅膀，佔領了我們村子，壓迫村子裡的人們。此外，她正在通過殘忍的人體實驗，製作什麼東西。", 5, 2151003);
            break;
        case 9:
            ms.sendNextPrevS("沒能弄清楚她在製作什麼東西嗎？", 5, 2151001);
            break;
        case 10:
            ms.sendNextPrevS("很遺憾，不過……我推測可能是生化武器。", 5, 2151003);
            break;
        case 11:
            ms.sendNextPrevS("這一切行動的目的是為了讓黑魔法師復活……真是可怕的事情。更可怕的是像她這樣擁有強大力量，卻追隨黑魔法師的人正在不斷增加。", 5, 2151003);
            break;
        case 12:
            ms.sendNextPrevS("因此，必須參加聯盟嗎？", 5, 2151001);
            break;
        case 13:
            ms.sendNextPrevS("雖然我不太願意，但我想這是必須要做的事情。", 5, 2151003);
            break;
        case 14:
            ms.sendNextPrevS("皇家騎士團，你認為他們可以信任嗎？", 5, 2151000);
            break;
        case 15:
            ms.sendNextPrevS("光靠我們的力量不行嗎？", 5, 2151001);
            break;
        case 16:
            ms.sendNextPrevS("……不知道，黑魔法師實在太……我們和他的差距太大。老實說，我不相信他們。但是……不能再……", 5, 2151003);
            break;
        case 17:
            ms.sendNextPrevS("……我不想再有人像斐勒一樣犧牲了。", 5, 2151003);
            break;
        case 18:
            ms.sendNextPrevS("……", 5, 2151002);
            break;
        case 19:
            ms.sendNextPrevS("啊，事情很簡單。只要將想要消滅黑色翅膀的心和不想和皇家騎士團共事的心放在一起，看看哪一邊更強就行了。不是嗎？", 5, 2151002);
            break;
        case 20:
            ms.sendNextPrevS("喂，裴爾……大家並不都像你這麼單純。", 5, 2151000);
            break;
        case 21:
            ms.sendNextPrevS("用不著想得那麼複雜，簡單地下決定吧。我更希望能消滅黑色翅膀。伊萊克斯，你呢？", 5, 2151002);
            break;
        case 22:
            ms.sendNextPrevS("我嘛……雖然討厭皇家騎士團，但更憎恨黑色翅膀。", 5, 2151000);
            break;
        case 23:
            ms.sendNextPrevS("傑奇呢？", 5, 2151002);
            break;
        case 24:
            ms.sendNextPrevS("老實說，我覺得再給皇家騎士團一次機會也不是什麼壞事。", 5, 2151004);
            break;
        case 25:
            ms.sendNextPrevS("赫力泰呢？", 5, 2151002);
            break;
        case 26:
            ms.sendNextPrevS("消滅黑色翅膀……不是什麼討厭不討厭的問題。", 5, 2151001);
            break;
        case 27:
            ms.sendNextPrevS("那就決定了！", 5, 2151002);
            break;
        case 28:
            ms.sendNextPrevS("……呵呵……謝謝。裴爾，謝謝你幫我理清頭緒，這次只是會議。至於是否加入聯盟，是之後才能決定的事情……聽聽他們的是怎麼說的，然後選擇最佳結果。", 5, 2151003);
            break;
        case 29:
            ms.sendNextPrevS("……#h0# 我把這份聲明書交給你。請你到耶雷弗去，把這份聲明書交給西格諾斯。把我們的意思告訴他們……你好像是最合適的人選。", 5, 2151003);
            break;
        case 30:
            ms.dispose();
            ms.gainItem(4033096, ms.getPlayer().itemQuantity(4033096) ? 0 : 1);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.getPlayer().changeMap(ms.getMap(310010000), ms.getMap(310010000).getPortal(0));
    }
}
