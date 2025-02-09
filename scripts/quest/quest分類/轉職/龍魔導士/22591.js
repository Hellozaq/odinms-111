/*
     名字：過去，歐尼斯龍，黑魔法師
     地图：寂靜的洞穴
     描述：914100021
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 3) {
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
            qm.sendNext("幾百年前……楓之谷世界還有很多歐尼斯龍……還有很多喜愛歐尼斯龍的人……我們和人類的朋友普力特希望這兩個不同的種族可以一同生活下去。");
            break;
        case 1:
            qm.sendNextPrev("歐尼斯龍擁有強大的力量，但卻有著不完整的靈魂……而人類的力量雖然很弱，但卻擁有強大的意志……我們把兩個種族的意志結合了起來，誕生了龍魔導士……我們希望通過這種管道讓人類和歐尼斯龍共存。");
            break;
        case 2:
            qm.sendNextPrev("但是這種希望被#b黑魔法師#k打破了。");
            break;
        case 3:
            qm.sendNextPrevS("黑魔法師？黑色翅膀說為了楓之谷的和平而想復活的人，不就是黑魔法師嗎？");
            break;
        case 4:
            qm.sendAcceptDecline("與其慢慢跟你說，我想還是讓你親眼看到會更快一些……我會把你送進我的記憶之中。把你送進我記憶的一個片段，幾百年前和黑魔法師戰鬥之前，普力特和我對話時的那段#b記憶#k……");
            break;
        case 5:
            if (qm.getMap(900030000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(22591).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(900030000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(900030000), qm.getMap(900030000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(300, qm.getMap(914100021));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "陣地後面目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
