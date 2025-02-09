/*
     名字：妖精羅雯的請求2
     地图：魔法森林
     描述：101000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            qm.sendNext("森林南部再次出現了那個拿著玩偶的小孩。這次說話的樹跟他說不要做，可是說完之後受到了威脅，說阻擋了會被折斷樹枝，之後就消失了。");
            break;
        case 1:
            qm.sendAcceptDecline("抓到犯人是最好的，但抓不到也沒辦法啊。只能像上次一樣打倒綠菇菇後收回挫折的綠菇菇玩偶……那就拜託你了。");
            break;
        case 2:
            if (qm.getMap(910100002).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21718).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(910100002).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910100002), qm.getMap(910100002).getPortal(3));
                qm.getPlayer().startMapTimeLimitTask(1200, qm.getMap(101000000));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "南邊秘密的森林目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
