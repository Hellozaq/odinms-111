function enter(pi) {
    if (pi.getPlayer().isRideFinished() === true) {
        pi.playPortalSE();
        pi.warp(200000161, 0);
    }

}
