/*
     名字：瑞恩島
     地图：寒冷的森林5
     描述：140090500
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(false));
    return false;
}
