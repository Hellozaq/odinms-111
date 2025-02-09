/*
     名字：達米
     地图：燃燒的神木村6
     描述：272000600
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31177)).getStatus() < 2) {
        cm.sendOk("把我留在這裡大家都跑掉了~哼。");
        cm.dispose();
        return;
    }
    cm.sendSimple("沒有別的矮人族比我更熟練龍的變身。相信我吧！\r\n#L1##b讓我變身成龍吧#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.getPlayer().changeMap(cm.getMap(200090520), cm.getMap(200090520).getPortal(5));
        cm.useItem(2210083); //變龍
    }
    cm.dispose();
}
