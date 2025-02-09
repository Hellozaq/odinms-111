/*
     名字：僧侶之路
     地图：魔法森林圖書館
     描述：101000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 2) {
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
            qm.sendNext("你想選擇僧侶之路嗎？僧侶和其他系列的魔法師相比稍微有點特別，擁有很多#b恢復#k和#b輔助#k系列的技能。");
            break;
        case 1:
            qm.sendNextPrev("僧侶能使用的技能，包括....熟悉魔法的咒語精通，吸收敵人魔量的魔力吸收，減少傷害的神聖之光，還有回復周圍隊員HP的#b#q2301002##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為僧侶嗎？那樣的話，你必須通過簡單的測試才行。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放棄任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到法師試驗場去。");
            break;
        case 4:
            if (qm.getMap(910140000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1417).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(910140000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910140000), qm.getMap(910140000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(101000003));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "法師試驗場目前擁擠，請稍後再試"));
            qm.dispose();
    }
}

function end(mode, type, selection) {
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
            qm.sendYesNo("我知道你一定可以做到，你的表現很優異，好的，讓我來把你升職為僧侶，準備好了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1417).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(230);
            qm.removeAll(4031013);
            qm.sendNext("從現在開始，你就是僧侶了……僧侶是用一顆虔誠的心，為萬物注入生命力量的人……希望你能堅定自己的信仰…");
            break;
        case 2:
            qm.sendOk("對於僧侶來說，信仰非常重要。相信神，追隨神，向世人展示他們的寬宏……只要虔誠，就可以獲得更強的神聖力。");
            break;
        case 3:
            qm.dispose();
    }
}
