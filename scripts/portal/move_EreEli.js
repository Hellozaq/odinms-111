function enter(pi) {
    if (pi.getPlayer().isRideFinished() === true) {
        pi.playPortalSE();
        pi.warp(104020120, 0);
    }

}
