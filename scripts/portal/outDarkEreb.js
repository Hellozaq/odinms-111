/*
     名字：隱藏地圖
     地图：寧靜的耶雷弗
     描述：913030000
 */

function enter(pi) {
    var map = pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20407)).getStatus() > 1 ? 924010200 : 924010100; //黑暗魔女的洞穴
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(0));
    return true;
}
