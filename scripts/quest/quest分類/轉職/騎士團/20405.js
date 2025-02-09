/*
     名字：黑暗魔女洞穴
     地图：黑暗魔女的洞穴
     描述：924010000
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
            qm.sendNext("牆壁上貼著紙條：詛咒的施法者黑暗魔女我沒有發現她，但是在這個洞穴裡我找到了一個奇怪的裝置，我想它曾被使用過，可能是用於詛咒的工具。我現在已將工具移送到#b耶雷弗#k，做進一步的研究。");
            break;
        case 1:
            qm.sendPrevS("看樣子好像我來晚了，估計優納米斯已經帶著儀器回到了耶雷弗，我也最好回去看看究竟。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 70000 exp", 3);
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20405).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(70000);
            qm.dispose();
    }
}
