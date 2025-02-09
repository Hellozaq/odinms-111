/*
     名字：毒霧森林
     地图：森林外圍出口
     描述：930000800
 */

function act() {
    rm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "毒霧森林水源已經得到了淨化"));
}

//4001164巨人毒珠
