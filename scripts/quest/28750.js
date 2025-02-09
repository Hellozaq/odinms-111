/*
     名字：把我弄出去
     地图：一般牢房
     描述：610040500
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            qm.sendSimple("歡迎來到你的新家，楓之谷人！這就是我們為與我們敵對的人準備的監獄！ 一旦進去就出不來，哦，星際假日除外！\r\n#L0##b這種東西是關不住我的！#l\r\n#L1#那行，我就待這兒看你怎麼出去好了。#l");
            break;
        case 1:
            qm.sendNextPrev("我們先進的囚籠豈是你這種原始人可以理解的？你是打不開它的，頭長得再大也沒用！");
            break;
        case 2:
            qm.sendNextPrev("就算，雖說不太可能，你能打開它，你也逃不了。除非你用上我們的超級秘密交通工具——機械座駕！它正好就離你三英尺遠，在這個星球上，只有它裝載的武器才能破壞我們的安保機器人，怎樣？是不是絕望了！你肯定不會聰明到利用我這番話的！哇哈哈哈！");
            break;
        case 3:
            qm.sendNextPrevS("#b哇哦，好酷啊！是誰製作的？肯定是你吧，我的原始人大腦已經完全跟不上你了。");
            break;
        case 4:
            qm.sendNextPrev("看來你們這幫蠢猴子裏還是有幾個聰明的傢夥嘛！當然是我製作的啦，差不多！要製作出機械座駕有我一個人就可以了！如果有人告訴你它是我們花了無數人力花了三十多年才製作出來的，你可千萬別信他！完全是胡說八道！");
            break;
        case 5:
            qm.sendNextPrevS("#b嘿，這真是酷斃了，老實說吧，我不想逃跑了，你能待在這兒跟我說說你有多厲害嗎？");
            break;
        case 6:
            qm.sendNextPrevS("#b你能解釋下那東西的控制機制嗎？你們都用上了什麼索敵系統？");
            break;
        case 7:
            qm.sendNextPrev("噢——噢，那個啊，當然沒問題啦，畢竟是我製作的，只不過……那啥，你懂的，因為保密協定啥的，這個，說了你也不明白……");
            break;
        case 8:
            qm.sendNextPrevS("#b可它不是你製作的嗎！再說一點內幕也不行？我該怎麼操作它的主炮？門怎麼打開？你不會連這麼簡單一扇門都不會開吧。");
            break;
        case 9:
            qm.sendNextPrev("我當然會開，我可是開門大師！我跟你講這門可不是什麼人都能開的！");
            break;
        case 10:
            qm.sendNextPrevS("#b那——那你能開給我看看嘛？我只是想在這裡渡過餘生前見證一下你的偉大。");
            break;
        case 11:
            qm.sendNextPrev("可以理解，我確實很偉大。");
            break;
        case 12:
            qm.sendNextPrev("#b*哢嚓*");
            break;
        case 13:
            qm.sendNextPrev("厲不厲害，楓之谷猴子？！");
            break;
        case 14:
            qm.sendNextPrevS("#b(這貨沒救了啊！)");
            break;
        case 15:
            qm.sendNextPrevS("#b大哥！你真是又聰明又厲害！我滿足了，像你這麼能幹的人看守簡直是浪費生命啊，你應該去和美女談笑風生，帶她們去，呃，太空安傑利斯山脈欣賞美景！");
            break;
        case 16:
            qm.sendNextPrev("我確實很想去太空安傑利斯，那裡的景色讓人嘆服，但那裡的人就不怎麼樣了！可惜！我錯過了我上司的孩子的大變慶典，處罰就是看守你！");
            break;
        case 17:
            qm.sendNextPrevS("#b哎呀，你肯定能說服他原諒你的啦！直接沖進去讓他要麼承認你有多麼偉大，要麼當場斃了你！你可不是什麼窩囊廢，這兒的東西不都是你造出來的嗎！");
            break;
        case 18:
            qm.sendNextPrev("你說的有道理，那什麼，雖然說我是個天才發明家有點過了，但我確實不該淪落到如此地步！");
            break;
        case 19:
            qm.sendNextPrevS("#b可不是啊，兄弟！你得馬上行動！別忘了威脅他把你當場斃了！");
            break;
        case 20:
            qm.sendNextPrev("好！沒問題！謝謝你，醜陋的楓之谷人，等我看到了太空安傑利斯山，一定會想起你的，你肯定能當個好奴隸！");
            break;
        case 21:
            Packages.server.quest.MapleQuest.getInstance(28750).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(610040501), qm.getMap(610040501).getPortal(0));
            qm.dispose();
    }
}
