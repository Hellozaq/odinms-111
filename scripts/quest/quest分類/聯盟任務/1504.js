/*
     名字：痕跡的調查
     地图：上層走廊
     描述：120000100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
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
            qm.sendNext("如果你聽過卡伊琳的說明，應該就會知道。軍團長是黑魔法師最危險的7個部下…..發現了庫瓦勒的紋樣，到底意味著什麼呢？");
            break;
        case 1:
            qm.sendNextPrev("希望發現的只是幾百年前的痕跡……如果這是黑魔法師復活的徵兆，那該怎麼辦呢……");
            break;
        case 2:
            qm.sendAcceptDecline("必須先對散發出危險氣息的紋樣進行淨化。可能會很刺眼，你最好遮住眼睛。好的，那麼……！");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(1504).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("demonSlayer/whiteOut", 3));
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction5.img/unitedMaple/Quest1504"));
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
            qm.sendNext("這下清楚了，這個紋樣的含義。這是庫瓦勒向楓之谷世界發出的警告。……告知黑魔法師的復活……");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1504).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(100000201), qm.getMap(100000201).getPortal(2));
            qm.dispose();
    }
}
