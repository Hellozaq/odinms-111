/*
     名字：賽恩
     地图：魔法森林
     描述：101000000
 */

function start() {
    if (cm.getPlayer().getLevel() < 25) {
        cm.sendOk("嗨~，你想要挑戰自己的極限嗎，#b25#k等級以上再來找我談談。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("嗨~~我是賽恩，想不想挑戰一下自己的極限，完成任務會有特殊獎勵的哦，入場費用是#b5000#k楓幣，你現在進去嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getMeso() < 5000) {
            cm.sendOk("很抱歉，你好像沒有足夠楓幣支付入場費。");
            cm.dispose();
            return;
        }
        map = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2050)).getStatus() == 1 ? 910130000 : cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2051)).getStatus() == 1 ? 910130100 : cm.getPlayer().getLevel() < 50 ? 910130000 : 910130100;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
        cm.gainMeso(-5000);
    }
    cm.dispose();
}
