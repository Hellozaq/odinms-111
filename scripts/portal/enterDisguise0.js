function enter(pi) {
    if (pi.getJob() >= 1000) {
        if (pi.haveItem(4032179)) { // Search warrent
            pi.playerMessage("紧急搜寻开始了。");
        }

        pi.playPortalSE();
        pi.warp(130010000, 3);
    } else {
        pi.playerMessage("只有骑士团职业才可以进入。");
    }
}
