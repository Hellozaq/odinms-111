/*
     名字：黄金寺院
     地图：950101000
     描述：950101000
 */

function init() {
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    var eim = em.newInstance("Ravana_EASY" + leaderid);

    var map = eim.setInstanceMap(950101010);
    map.resetFully();
    var mob = em.getMonster(9500390);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1000, 513));

    eim.startEventTimer(3600000); // 1 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 950101010) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 950101100);
    em.setProperty("state", "0");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    //after ravana is dead nothing special should really happen
}

function leftParty(eim, player) {
}

function disbandParty(eim) {
}

function playerDead(eim, player) {
}

function cancelSchedule() {
}
