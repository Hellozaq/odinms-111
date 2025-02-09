/*
     名字：卡帕萊特協會長的考驗
     地图：瑪迦提亞城
     描述：261000000
 */

var status = -1;

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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3303)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3303).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            if (getOreArray().length < 1) {
                qm.sendOk("很抱歉，你沒有#b寶石礦#k，我不能跟你交易。");
                qm.dispose();
                return;
            }
            qm.sendSimple("哦，看來有人準備好了，你很想加入卡帕萊特協會，對吧？\r\n" + getOreString(getOreArray()));
            break;
        case 1:
            select = selection;
            qm.sendNext("我现在去拿幫你通過卡帕萊特協會長官測試的東西，你等下在與我交談。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(3303).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(getOreArray()[select], -2);
            qm.gainExp(3000);
            qm.dispose();
    }
}

function getOreArray() {
    var ores = new Array();
    var y = 0;
    for (var x = 4020000; x <= 4020008; x++) {
        if (qm.getPlayer().itemQuantity(x) > 1) {
            ores[y] = x;
            y++;
        }
    }
    return ores;
}

function getOreString(ids) { // Parameter 'ids' is just the array of getOreArray()
    var thestring = "#b";
    var extra;
    for (x = 0; x < ids.length; x++) {
        extra = "#L" + x + "##t" + ids[x] + "##l\r\n";
        thestring += extra;
    }
    thestring += "#k";
    return thestring;
}
