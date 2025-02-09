/*
     名字：加滿油
     地图：外星人基地走廊
     描述：610040010
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("這肯定就是機械座駕了！看著好眼熟，大概是別的外星人留在這兒的吧！我們真得好好治治這幫入侵者了。暈..........沒油了！不過……新葉城市長說外星人採集的就是燃料，或許我能在這附近找找替代品。");
            break;
        case 1:
            qm.sendNextPrevS("這些東西或許可以，它們四處都是。");
            break;
        case 2:
            qm.sendNextPrevS("外星人警衛！我的攻擊對它們可沒用！我得避開它們！");
            break;
        case 3:
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("避开外星人警卫并在附近收集5块矿石作为燃料"));
            Packages.server.quest.MapleQuest.getInstance(28751).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("這下有燃料了，不過這玩意兒要怎麼啟動來著？");
            break;
        case 1:
            qm.sendPrev("找不到開關——哎喲我的天！用鑰匙的！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(28751).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4033193, -5);
            qm.gainExp(10000);
            qm.dispose();
    }
}
