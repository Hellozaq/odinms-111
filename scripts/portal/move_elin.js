/*
     名字：隱藏地圖
     地图：時間監控室
     描述：222020400
 */

function enter(pi) {

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(300000100), pi.getMap(300000100).getPortal(1)); //小森林
    pi.playerMessage(5, "移动到时间之门的另一端。");
    return true;
}
