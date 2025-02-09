/*
     名字：黑路
     地图：避難準備完畢
     描述：914000500
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "請先將解救的孩子送回到赫莉娜身邊"));
    return false;
}
