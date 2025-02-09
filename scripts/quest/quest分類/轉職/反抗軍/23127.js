/*
     名字：保護修亞勒
     地图：人煙稀少的公園
     描述：931000440
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
            qm.sendNext("周圍好像太安靜了……是有人打算襲擊我嗎？哎呀……竟然想偷襲我這個老頭。黑色翅膀的那些人還真是卑鄙……不過，我不會被這種事情嚇到的！");
            break;
        case 1:
            qm.sendNextPrevS("#b(#p2152010#的膽子好像很大，看上去好像一點都不害怕。)#k");
            break;
        case 2:
            qm.sendNextPrev("因為有你在，看來他們是不會輕易露面的了。他們好像對你很戒備……真是的……看來我們得設個局，讓他們現身才行。你說呢？");
            break;
        case 3:
            qm.sendNextPrevS("#b我沒關係，不過你呢？他們的目標可是你啊。#k");
            break;
        case 4:
            qm.sendAcceptDecline("哼，我老人家會被那些東西嚇到嗎？別擔心。反正有你保護我，我幹嘛害怕？你好像是末日反抗軍中間很有潛力的人。好了，我往更僻靜的地方走一點，讓黑色翅膀出來。");
            break;
        case 5:
            var em = qm.getEventManager("ProtectingSurl");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                em.startInstance(qm.getPlayer());
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "公園角落目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
