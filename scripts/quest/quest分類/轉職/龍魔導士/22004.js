/*
     名字：修理籬笆
     地图：農場中心地
     描述：100030300
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
                qm.sendOk("嗯……#p1013101#的話，應該就能幫我了。");
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
            qm.sendNext("最近農場上的肥肥有點奇怪，經常無緣無故地發脾氣，做出一些煩人的事情來。我對此很擔心，所以今天很早就出來了。果然有一隻#o1210100#鑽出了籬笆，逃到了外面去了。");
            break;
        case 1:
            qm.sendAcceptDecline("在找到肥肥之前，必須先把壞的籬笆修好，還好壞的不是太嚴重，只要有幾個木棒應該就能修好了。要是你能幫我搜集3個#b#v4032498##t4032498##k就好了……");
            break;
        case 2:
            qm.sendPrev("哦，真是謝謝你，木棒可以從周圍的木妖身上收集到，它們雖然不是很強，但不小心的話，可能會遇到危險。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(22004).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/6/0"));
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
            qm.sendNext("哦，木棒收集到了嗎？真了不起，我應該給你什麼作為獎勵呢……對了，我有那個東西。");
            break;
        case 1:
            qm.sendPrev("好了，我用修理籬笆剩下的木棒做了一把椅子。雖然不太好看，但卻很結實，就給你用吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v3010097# #t3010097# 1 \r\n#v2022621# #t2022621# 15 \r\n#v2022622# #t2022622# 15 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 210 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(22004).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/7/0"));
            qm.gainItem(4032498, -3);
            qm.gainItem(3010097, 1);
            qm.gainItem(2022621, 15);
            qm.gainItem(2022622, 15);
            qm.gainExp(210);
            qm.dispose();
    }
}
