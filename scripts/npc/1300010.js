/*
     名字：彩色菇菇芽孢
     地图：菇菇森林深處
     描述：106020300
 */
/*
function start() {
cm.sendYesNo("#b要使用彩色菇菇芽孢嗎？#k\r\n\r\n#r※ #e注意事項#n\r\n請勿用在人身上！\r\n誤食後，請儘快到附近的醫院就醫！");
}
 */

/*
function action(mode, type, selection) {
if (mode > 0) {
cm.gainItem(2430014, -1);
cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).setCustomData(2);
cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "魔法屏障已經被擊破"));
}
cm.dispose();
}
 */

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("You have canceled the use of the item.");
            cm.gainItem(2430014, 1);
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
    }
    if (status == 0) {
        cm.sendYesNo("Are you going to use the #bKiller Mushroom Spore#k?....#e#r* Take Note#n..Please do not apply directly on the body!..If swallowed, please see the nearest doctor!");
    }
    if (status == 1)
        cm.PlayerToNpc("Awesome, the barrier is broken!!!");
    if (status == 2) {
        cm.playerMessage("The Mushroom Forest Barrier has been removed, and penetrated.");
        cm.dispose();
    }
}
