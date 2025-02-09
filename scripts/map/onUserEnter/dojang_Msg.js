/*
     名字：武陵道場
     地图：武陵道場
     描述：925020000
 */

function start() {
    ms.getPlayer().getMap().startMapEffect(Msg[Packages.server.Randomizer.nextInt(Msg.length)], 5120024);
    ms.dispose();
}

Msg = ["終於有人來了，如果你有一點點勇氣，請進入前面的大門",
    "武陵道場歡迎你來挑戰~~",
    "這裡不歡迎懦夫，如果你走錯了，請原路返回，哈哈~",
    "如果你想走上失敗的道路，過來找我吧！"];
