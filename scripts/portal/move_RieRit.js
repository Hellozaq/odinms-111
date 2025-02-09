function enter(pi) {
    if (pi.getPlayer().isRideFinished()) {
        pi.playPortalSE();
        pi.warp(104000000, 0);
    }

}
