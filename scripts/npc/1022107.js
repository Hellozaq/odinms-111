/*
     名字：勇士之村警告標示
     地图：風塵山丘
     描述：102020100
 */

var map = [102020100, 102030000, 102030100, 102030200, 102030300];

var maps = ["風塵山丘", "黑肥肥領土", "野豬領土", "鐵甲豬領土", "燃燒的熱氣"];

var mob = ["黑斧木妖", "黑肥肥  膽小的黑肥肥", "鋼之肥肥", "鋼之黑肥肥", "火肥肥  鋼之黑肥肥"];

var des = ["通向火焰之地的三岔路", "無", "無", "無", "通向火焰之地的盡頭"];

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
            if (status == 1) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22530)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22530)).getCustomData() == null) {
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22530)).setCustomData("00000");
        Packages.server.quest.MapleQuest.getInstance(22597).forceStart(cm.getPlayer(), 0, 0);
    }
    for (var i = 0; i < map.length; i++)
        if (cm.getPlayer().getMap().getId() == map[i]) {
            var slot = i;
        }
    var x = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22530)).getCustomData();
    var y = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22597)).getCustomData();
    var ch = x[slot];
    if (ch == '1') {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getId() == 102030100) {
        switch (status) {
            case 0:
                cm.sendNext("野豬領土  警告牌\r\n\r\n出沒的怪物：鋼之肥肥  火肥肥\r\n特殊事項：無\r\n確認：");
                break;
            case 1:
                cm.sendSimple("#b(警告牌上多了一個怪物名，快將誤寫的怪物名去掉吧)\r\n\r\n#L0##b鋼之肥肥#l\r\n#L1#火肥肥#l");
                break;
            case 2:
                if (selection < 1) {
                    cm.sendNext("#b(嗯，有些奇怪呢？你確定沒有鋼之肥肥這種怪物嗎？再仔細看看吧。)");
                    cm.dispose();
                    return;
                }
                if (selection > 0) {
                    cm.sendNext("#b(去掉了警告牌上誤寫的怪物名，在確認欄中標注了0)#k\r\n\r\n野豬領土  警告牌\r\n\r\n出沒的怪物：鋼之肥肥 \r\n特殊事項：無\r\n確認：0");
                }
                break;
            case 3:
                var next = x.substr(0, slot) + '1' + x.substr(slot + 1);
                cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22530)).setCustomData(next);
                cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22597)).setCustomData(parseInt(y) + 1);
                cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22597)), true);
                cm.sendOk("確認了" + (parseInt(y) + 1) + "個勇士之村警告牌。確認完5個警告牌後，去向麥克報告吧。");
                cm.dispose();
                return;
        }
    }
    switch (status) {
        case 0:
            cm.sendNext("" + maps[slot] + "  警告牌\r\n\r\n出沒的怪物：" + mob[slot] + "\r\n特殊事項：" + des[slot] + "\r\n確認：");
            break;
        case 1:
            cm.sendYesNo("#b(警告牌上好像沒有錯誤的內容，在確認欄中打上0標記吧。)");
            break;
        case 2:
            cm.sendNext("#b(在警告牌的確認欄中標注了0)#k\r\n\r\n" + maps[slot] + "  警告牌\r\n\r\n出沒的怪物：" + mob[slot] + "\r\n特殊事項：" + des[slot] + "\r\n確認：0");
            break;
        case 3:
            var next = x.substr(0, slot) + '1' + x.substr(slot + 1);
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22530)).setCustomData(next);
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22597)).setCustomData(parseInt(y) + 1);
            cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22597)), true);
            cm.sendOk("確認了" + (parseInt(y) + 1) + "個勇士之村警告牌。確認完5個警告牌後，去向麥克報告吧。");
            cm.dispose();
    }
}
