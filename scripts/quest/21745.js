/*
     名字：要想見武公
     地图：武陵道場入口
     描述：925020001
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 6) {
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
            qm.sendSimple("什麼事？這裡是神聖的道場！禁止私聊！\r\n#L0##b相見武公，是重要的事。#l");
            break;
        case 1:
            qm.sendSimple("那麼挑戰桃花仙島道場吧！武公大人一直在最上層等著挑戰者！\r\n#L0##b…沒有用後路可相見武公的方法…#l");
            break;
        case 2:
            qm.sendSimple("駁回！說什麼呢！竟然想在這神聖的道場裡使用這種卑鄙的手段啊！\r\n#L0##b…對身體有益的深山人參。#l");
            break;
        case 3:
            qm.sendSimple("…啊…\r\n#L0##b對身體很好的深山人參#l");
            break;
        case 4:
            qm.sendSimple("…啊，不可以，絕對不可以。\r\n#L0##b有益身體的深山人參100個！#l");
            break;
        case 5:
            qm.sendAcceptDecline("…吼…咳…咳咳…那麼，請… ");
            break;
        case 6:
            if (qm.getMap(925041001).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21745).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(925041001).resetFully();
                qm.getPlayer().changeMap(qm.getMap(925041001), qm.getMap(925041001).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(1200, qm.getMap(925020001));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "深山人蔘山丘目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
