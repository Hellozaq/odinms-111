/*
     名字：妖精羅雯的請求1
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
            qm.sendNext("森林南部出現了那個拿著玩偶的小孩。是說話的樹說的應該是沒錯。進入森林的時候有拿著挫折的綠菇菇玩偶，出來的時候消失了，這次也是肯定想把#o1110100#變為兇暴。");
            break;
        case 1:
            qm.sendYesNo("抓到犯人最好不過了，說話的樹說拿著玩偶的小孩本來就神出鬼沒那麼容易被抓到。就因為那樣也不能不管綠菇菇們。要儘快收回玩偶，把森林南部還原，你能幫幫我嗎？");
            break;
        case 2:
            if (qm.getMap(910100002).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21717).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
