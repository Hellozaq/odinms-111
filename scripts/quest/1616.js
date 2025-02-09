/*
     名字：[十字獵人]雪麗的提議
     地图：補給品倉庫
     描述：931050500
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 3) {
                qm.sendOk("你該不會說楓之穀的死活都與你無幹吧？請你再考慮一下。");
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
            qm.sendNext("也許對突如其來的談話你會感到驚訝，可是你想不想為楓之谷的和平工作呢？");
            break;
        case 1:
            qm.sendNextPrevS("什麼和平，你在說什麼？雪麗！你又想欺騙我嗎？史菲魯納沒有禮物，克勞烏也是一樣。");
            break;
        case 2:
            qm.sendNextPrev("這段時間我對你過分的要求，只是想要確認你的能力與往後的可能性而已。");
            break;
        case 3:
            qm.sendAcceptDecline("結果發現你是我所看過的眾多人中最出色的那一位，願意把你的才能發揮在守護這世界嗎？");
            break;
        case 4:
            qm.sendPrev("詳細的內容我不方便馬上告訴你。請你去見見#b#m310000000##k的#b#p9073003##k，他是個帶著黑狗的紳士，他會告訴你的。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(1616).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("原來是你啊？歡迎光臨，詳細情況找個安靜的地方再說吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1616).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(931050500), qm.getMap(931050500).getPortal(0));
            qm.gainExp(10000);
            qm.dispose();
    }
}
