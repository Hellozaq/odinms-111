function enter(pi) {
    if (pi.getPlayer().isRideFinished() === true) {
        pi.playPortalSE();
        pi.warp(250000100, 0);
    }

}
