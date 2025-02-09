function enter(pi) {
    if (pi.getPlayer().isRideFinished()) {
        pi.playPortalSE();
        pi.warp(140000000, 0);
    }

}
