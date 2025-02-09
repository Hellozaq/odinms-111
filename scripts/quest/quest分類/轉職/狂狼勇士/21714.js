/*
     名字：南邊秘密的森林的綠菇菇
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
            if (status == 2) {
                qm.sendOk("不是來瞭解綠菇菇為什麼變奇怪的嗎?");
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
            qm.sendNext("不知道你是怎麼知道的，一猜就猜到了。從不久前開始，魔法森林南部的綠菇菇突然變得兇暴起來。很多綠菇菇的性格變得很奇怪，變得非常陰沉。");
            break;
        case 1:
            qm.sendNextPrev("聽說好像很多地方都出現了這種現象，所以我仔細打聽了一下，好像所有的異常現象都和某種玩偶有關。玩偶……真的非常奇怪。");
            break;
        case 2:
            qm.sendAcceptDecline("雖然不知道傳聞是不是真的，說不定這次綠菇菇的事情也和玩偶有關。我不確定你為什麼想知道綠菇菇變得兇暴的原因，但如果你想知道的話，可以和我一起進行調查。怎麼樣？你願意嗎？");
            break;
        case 3:
            qm.sendPrev("不知道是不是真的像傳聞說的那樣，綠菇菇發生變化的原因是玩偶…請你去打獵25隻#r#o1110130##k，尋找#b#o1110130#的玩偶#k。");
            break;
        case 4:
            if (qm.getMap(910100002).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21714).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
