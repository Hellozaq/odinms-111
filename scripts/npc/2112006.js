/*
     名字：羅密歐
     地图：特殊實驗室
     描述：926100200
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 926100200) {
        if (cm.getPlayer().getMap().getReactorByName("rnj3_out3").getState() > 0) {
            cm.sendNext("請快一點，我很擔心茱麗葉。");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().itemQuantity(4001131)) {
            cm.sendNext("茱麗葉的信！你能找到這封信，並將它轉交給我，實在太感激了，我們一定要儘快找到我的愛人。");
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "羅密歐看到茱麗葉的信，似乎很震驚"));
            cm.getMap(926100401).getReactorById(2619001).forceHitReactor(1); //觸發反應堆，召喚生氣的法郎肯洛伊德
            cm.gainItem(4001131, -1);
            cm.dispose();
            return;
        }
        if (cm.getPlayer().itemQuantity(4001134) && cm.getPlayer().itemQuantity(4001135)) {
            cm.gainItem(4001134, -1);
            cm.gainItem(4001135, -1);
            cm.getPlayer().getMap().killAllMonsters(true);
            cm.sendNext("拿到了#b#v4001134##z4001134##k、#b#v4001135##z4001135##k的檔案，現在我們可以通過旁邊的門進入下一區域。");
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的入口已經開啟"));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
            cm.getMap(926100200).setSpawns(false); //限制刷怪
            cm.getPlayer().getMap().getReactorByName("rnj3_out3").forceHitReactor(1);
            cm.dispose();
            return;
        }
        cm.sendOk("我們必须在这个附近搜寻，將#b#v4001134##t4001134##k和#b#v4001135##t4001135##k的檔案交給我。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getId() == 926100401) {
        cm.sendNext(cm.getPlayer().getMap().getMonsterById(9300137) != null ? "非常感謝你們的幫助，從猶利塔的手中幫我拯救了茱麗葉，讓我們現在先離開這個實驗室。" : "非常感謝你們的幫助，雖然沒能拯救茱麗葉，但是卻消滅了猶利塔的威脅，讓我們現在先離開這個實驗室。");
    }
}

function action(mode, type, selection) {
    if (mode > 0) {
        map = cm.getPlayer().getMap().getMonsterById(9300137) != null ? 926100600 : 926100500;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
    }
    cm.dispose();
}
