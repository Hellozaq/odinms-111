/*
     名字：泰拉森林
     地图：泰拉森林時空之門
     描述：240070000
 */

function start() {
    switch ((ms.getPlayer().getMap().getId() / 100) % 10) {
        case 0:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("temaD/enter/teraForest", 3));
            break;
        default:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("temaD/enter/neoCity" + ((ms.getPlayer().getMap().getId() / 100) % 10), 3));
    }
    ms.dispose();
}
