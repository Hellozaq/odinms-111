/*
     名字：阿杜比斯的任務Ⅰ
     地图：1-2區域
     描述：280010011
 */

function act() {
    rm.getPlayer().changeMap(rm.getMap(280010000), rm.getMap(280010000).getPortal(0));
    rm.getClient().getSession().write(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "一股未知的力量把你帶回了起點"));
}
