/*
Zakum Entrance
 */

/*
function enter(pi) {
pi.playerMessage(5, "请与奥拉谈一谈。");
return true;
}
 */
function enter(pi) {
    if (pi.haveItem(4031061)) {
        pi.playPortalSE();
        pi.warp(280090000);
    } else {
        pi.playerMessage(5, "请与奥拉谈一谈。");
    }
    return true;
}
