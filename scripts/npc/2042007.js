/*
     名字：休彼德蔓
     地图：擂臺賽場地&amp;lt;勝者的傲氣&gt;
     描述：980031300
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 980030010)
        cm.sendNext("怎麼樣，在怪物擂臺賽中玩的愉快嗎？不管怎樣，有你的支持是我最大的榮幸！");
    else
        cm.sendNext("多麼精彩的表演啊，希望怪物擂臺賽能給你帶來歡樂。\r\n#b你的本次成績: #r" + (cm.getCarnivalParty().getTotalCP() < 1000 ? "D" : cm.getCarnivalParty().getTotalCP() < 2000 ? "C" : cm.getCarnivalParty().getTotalCP() < 3000 ? "B" : "A") + "");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if ((cm.getPlayer().getMap().getId() / 100) % 4 == 3 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29021)).getStatus() == 1) {
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(7054)).setCustomData(parseInt(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(7054)).getCustomData()) + 1);
            cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(7054)), true);
        }
        cm.gainExp(cm.getPlayer().getMap().getId() != 980030010 ? cm.getPlayer().getLevel() * cm.getCarnivalParty().getTotalCP() : 0);
        cm.getCarnivalParty().removeMember(cm.getChar()); //清除本次怪物擂臺賽積分
        cm.getPlayer().changeMap(cm.getMap(980030000), cm.getMap(980030000).getPortal(0));
    }
    cm.dispose();
}
