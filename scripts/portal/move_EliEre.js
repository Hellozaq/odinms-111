function enter(pi) {
    if (pi.getPlayer().isRideFinished() === true) {
        pi.playPortalSE();
        pi.warp(130000210, 0);
    }
}
