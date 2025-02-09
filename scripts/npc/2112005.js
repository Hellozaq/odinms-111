/*
     名字：茱麗葉
     地图：特殊實驗室
     描述：926110200
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 926110200) {
        if (cm.getPlayer().getMap().getReactorByName("jnr3_out3").getState() > 0) {
            cm.sendNext("請快一點，我很擔心茱麗葉。");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().itemQuantity(4001130)) {
            cm.sendNext("羅密歐的信件！你能找到這封信，並將它轉交給我，實在太感激了，我們一定要儘快找到我的愛人。");
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "茱麗葉看到羅密歐的信，似乎很震驚"));
            cm.getMap(926110401).getReactorById(2619002).forceHitReactor(1); //觸發反應堆，召喚生氣的法郎肯洛伊德
            cm.gainItem(4001130, -1);
            cm.dispose();
            return;
        }
        if (cm.getPlayer().itemQuantity(4001134) && cm.getPlayer().itemQuantity(4001135)) {
            cm.gainItem(4001134, -1);
            cm.gainItem(4001135, -1);
            cm.sendNext("拿到了#b#v4001134##z4001134##k、#b#v4001135##z4001135##k的檔案，現在我們可以通過旁邊的門進入下一區域。");
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的入口已經開啟"));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
            cm.getPlayer().getMap().getReactorByName("jnr3_out3").forceHitReactor(1);
            cm.getPlayer().getMap().killAllMonsters(true);
            cm.getMap(926110200).setSpawns(false); //限制刷怪
            cm.dispose();
            return;
        }
        cm.sendOk("我們必须在这个附近搜寻，將#b#v4001134##t4001134##k和#b#v4001135##t4001135##k的檔案交給我。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getId() == 926110401) {
        cm.sendNext(cm.getPlayer().getMap().getMonsterById(9300138) != null ? "非常感謝你們的幫助，從猶利塔的手中幫我拯救了羅密歐，讓我們現在先離開這個實驗室。" : "非常感謝你們的幫助，雖然沒能拯救羅密歐，但是卻消滅了猶利塔的威脅，讓我們現在先離開這個實驗室。");
    }
}

function action(mode, type, selection) {
    if (mode > 0) {
        map = cm.getPlayer().getMap().getMonsterById(9300138) != null ? 926110600 : 926110500;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
    }
    cm.dispose();
}
