/*
     名字：[十字獵人]十字獵人
     地图：補給品倉庫
     描述：931050500
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            qm.sendAcceptDecline("對於這突然的建議感到吃驚吧。不好意思，能不能先確認下您有沒有資格和我們一起共事呢？因為我們不能對沒有資格的人隨便說話的。沒關係吧？");
            break;
        case 1:
            qm.sendNext("好的，那麼請協助我做一些簡單的測試吧，在規定時間內擊敗我的小狗黑皮的話就行了，那麼開始吧。");
            break;
        case 2:
            if (qm.getMap(931050510).getCharacters().size() < 1) {
                qm.getMap(931050510).resetFully();
                Packages.server.quest.MapleQuest.getInstance(1617).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getPlayer().changeMap(qm.getMap(931050510), qm.getMap(931050510).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(931050500));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "測試房間目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
