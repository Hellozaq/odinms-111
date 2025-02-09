/*
     名字：盧頓
     地图：第四座塔
     描述：211060800
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
    if (cm.getPlayer().getMap().getId() == 211060200 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3139)).getStatus() == 0) {
        switch (status) {
            case 0:
                cm.sendNext("哦，好久沒有人能進到城裡來了……冒險家，這裡非常危險，你還是快離開吧。");
                break;
            case 1:
                cm.sendNextPrevS("#b……誰……？！是鬼魂嗎？？？");
                break;
            case 2:
                cm.sendNextPrev("抱歉嚇到你了，我是守護城堡的騎士盧頓，很久以前就死了，但是卻變成了幽靈，在城裡遊蕩。");
                break;
            case 3:
                cm.sendNextPrev("#b為什麼變成了幽靈還留在城裡呢？有什麼必須守護的東西嗎？");
                break;
            case 4:
                cm.sendPrev("詳細的情况我們見面之後再說，首先，你想穿過這扇門，就必須消滅守護第一座塔的邪惡的紅色鱷魚兵，解開封印。我曾經在周圍見到過一位優秀的鎖匠，請你讓他幫你製作#v4032832#第一座塔樓的鑰匙。");
                break;
            case 5:
                Packages.server.quest.MapleQuest.getInstance(3139).forceStart(cm.getPlayer(), 0, null);
                cm.dispose();
                return;
        }
    }
    if (cm.getPlayer().getMap().getId() == 211060200 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3139)).getStatus() == 1) {
        switch (status) {
            case 0:
                if (!cm.getInfoQuest(3139).equals("clear=1;clear=1")) {
                    cm.sendOk("要想穿過這扇門，必須拿到第一座塔的鑰匙，進去把怪物的全部消滅掉，才能解開封印。");
                    cm.dispose();
                    return;
                }
                cm.sendNext("你解開了第一個封印，好像比我想像的更强，但是後面還需要解開兩個這樣的封印，才能到達我所在的地方。現在回頭還來得及，怎麼樣？");
                break;
            case 1:
                cm.sendNextPrevS("#b聽你這麼一說，我反而更有鬥志了，你等著，我馬上過去。");
                break;
            case 2:
                cm.sendPrev("那我就祝你能够獲勝，希望你能打敗那幫邪惡的傢伙。");
                break;
            case 3:
                Packages.server.quest.MapleQuest.getInstance(3139).forceComplete(cm.getPlayer(), 0);
                cm.gainItem(4032832, -1);
                cm.dispose();
                return;
        }
    }
    if (cm.getPlayer().getMap().getId() == 211060400 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3140)).getStatus() == 0) {
        switch (status) {
            case 0:
                cm.sendNext("這麼快就到達第二個關卡啦，我就長話短說了，必須消滅第二座塔樓裏的#r看守波爾#k，第二個封印才會解開。");
                break;
            case 1:
                cm.sendNextPrev("看守波爾……名字的意思好象是野豬吧？");
                break;
            case 2:
                cm.sendPrev("沒錯，就像名字一樣，他是個像野豬一樣兇殘、可怕的怪物。找到之前的那個鎖匠，他就會為你製作第二座塔樓的鑰匙#v4032833#，請你快去找他吧。");
                break;
            case 3:
                Packages.server.quest.MapleQuest.getInstance(3140).forceStart(cm.getPlayer(), 0, null);
                cm.dispose();
                return;
        }
    }
    if (cm.getPlayer().getMap().getId() == 211060400 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3140)).getStatus() == 1) {
        switch (status) {
            case 0:
                if (!cm.getInfoQuest(3140).equals("clear=1;clear=1")) {
                    cm.sendOk("要想穿過這扇門，需要拿到第二座塔的鑰匙，然後把第二座塔的#r看守波爾#k全部消滅掉。");
                    cm.dispose();
                    return;
                }
                cm.sendNext("看守波爾也消滅掉啦，要想解開最後的封印，還需要克服更危險的難關，但是我相信你一定可以做到。");
                break;
            case 1:
                cm.sendNextPrevS("#b是的，我馬上就去找你，請你等著我。");
                break;
            case 2:
                cm.sendPrev("那我就在第三個封印那邊等著你，請一定要注意安全……");
                break;
            case 3:
                Packages.server.quest.MapleQuest.getInstance(3140).forceComplete(cm.getPlayer(), 0);
                cm.gainItem(4032833, -1);
                cm.dispose();
                return;
        }
    }
    if (cm.getPlayer().getMap().getId() == 211060600 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3141)).getStatus() == 0) {
        switch (status) {
            case 0:
                cm.sendNext("終於到了最後一關，守護第三座塔樓的看守萊諾是比在城內徘徊的其他怪物更兇殘的傢伙。");
                break;
            case 1:
                cm.sendNextPrevS("#b把他們全部消滅掉，就能解開封印嗎？");
                break;
            case 2:
                cm.sendNextPrev("是的，雖然你之前一直做得很好，但這次絕對不能放鬆警惕。");
                break;
            case 3:
                cm.sendPrev("別擔心，快去鎖匠傑恩那裡拿到鑰匙#v4032834##t4032834#，解開第三個封印。");
                break;
            case 4:
                Packages.server.quest.MapleQuest.getInstance(3141).forceStart(cm.getPlayer(), 0, null);
                cm.dispose();
                return;
        }
    }
    if (cm.getPlayer().getMap().getId() == 211060600 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3141)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3167)).getStatus() != 2) {
        switch (status) {
            case 0:
                if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3167)).getStatus() == 0) {
                    cm.sendOk("要想穿過這扇門，必須拿到#v4032834#，把第三座塔的#r看守萊諾#k全部消滅掉。");
                    cm.dispose();
                    return;
                }
                cm.sendNextS("魯丹，要想獲得第三座塔樓的鑰匙，必須消滅貝爾武夫。但是卻找不到他，該怎麼辦呢？", 3);
                break;
            case 1:
                cm.sendNextPrev("嗯……貝爾武夫…是在穿過門之後下一張地圖城牆下4中的怪物，沒辦法，我會暫時削弱封印的力裏，你趁這個機會去蒐集鑰匙的資料。");
                break;
            case 2:
                cm.getPlayer().changeMap(cm.getMap(211060700), cm.getMap(211060700).getPortal(1));
                cm.dispose();
                return;
        }
    }
    if (cm.getPlayer().getMap().getId() == 211060600 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3141)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3167)).getStatus() == 2) {
        switch (status) {
            case 0:
                if (!cm.getInfoQuest(3141).equals("clear=1;clear=1")) {
                    cm.sendOk("要想穿過這扇門，必須拿到#v4032834#，把第三座塔的#r看守萊諾#k全部消滅掉。");
                    cm.dispose();
                    return;
                }
                cm.sendNext("你真的……把第三個封印也解開了嗎？經過漫長的等待，通往忠誠的誓言的路終於打開了。");
                break;
            case 1:
                cm.sendNextPrevS("#b忠誠的誓言……你是說獅子王的事情嗎？");
                break;
            case 2:
                cm.sendNextPrev("那我就在第三個封印那邊等著你，請一定要注意安全……");
                break;
            case 3:
                cm.sendPrev("我在第四座塔中，現在已經沒有封印阻擋你了，請過來找我，小心路上的怪物，希望能儘快親眼見到你……");
                break;
            case 4:
                Packages.server.quest.MapleQuest.getInstance(3141).forceComplete(cm.getPlayer(), 0);
                cm.gainItem(4032834, -1);
                cm.dispose();
        }
    }
}
