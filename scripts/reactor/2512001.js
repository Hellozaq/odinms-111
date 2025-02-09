/*
     名字：隱藏地圖
     地图：深山人蔘的領域1
     描述：925100201
 */

function act() {
    rand = Math.floor(Math.random() * 3);
    if (rand < 1)
        rand = 1;

    for (var i = 0; i < rand; i++) {
        rm.dropItems(true, 1, 30, 60, 15);
        rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "海盜王的箱子被打開了，它應該會很生氣"));
    }
}

//4031551金勾海賊王的寶物
