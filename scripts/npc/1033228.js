/*
     名字：塔古斯
     地图：瑞德弟的陷阱
     描述：922030100
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
            cm.sendNext("你是精靈遊俠嗎？");
            break;
        case 1:
            cm.sendNextPrevS("#b……？你是誰？甦醒的火花在哪裡！");
            break;
        case 2:
            cm.sendNextPrev("甦醒的火花？啊……你是上當了嗎？嘻嘻嘻……真是個愚蠢的傢夥，根本沒那種東西！");
            break;
        case 3:
            cm.sendNextPrevS("#b……那個叫瑞德弟的人說……全都是假的嗎！");
            break;
        case 4:
            cm.sendPrev("聽說你比看上去的要單純，看來是真的，嘻嘻……不用再多說廢話了吧？");
            break;
        case 5:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300432), new java.awt.Point(-135, 492));
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24084)).setCustomData(1);
            cm.dispose();
    }
}
