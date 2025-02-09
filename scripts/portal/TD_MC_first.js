function enter(pi) {
    var level = pi.getPlayerStat("LVL");
    if (level >= 30 && level <= 40) {

        pi.playPortalSE();
        pi.warp(106020000, 1);
    } else {
        pi.playerMessage(5, "此地区因为有地气阻挡，无法移动。");
    }

}
